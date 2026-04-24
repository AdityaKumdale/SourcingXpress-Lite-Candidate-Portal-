import { NextResponse } from 'next/server';
import { readDb,writeDb } from '../../../../lib/db'; 
import { randomUUID } from 'crypto'; // Native Node module
import { Application } from '../../../../types/types';



export async function POST(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // 1. Type as Promise
) {
  // 2. Await the params
  const { id: jobId } = await params;

  const body = await request.json();
  const { userId } = body;

  if (!userId) {
    return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
  }

  const db = await readDb();

  // Check for duplicates using the awaited jobId
  const existing = db.applications.find(
    app => app.jobId === jobId && app.userId === userId
  );

  if (existing) {
    return NextResponse.json({ error: "Already applied to this job" }, { status: 400 });
  }

  // Create Application
  const newApplication = {
    id: randomUUID(),
    jobId: jobId, // Use the awaited jobId
    userId: userId,
    status: "pending" as const,
    appliedDate: new Date().toISOString()
  };

  db.applications.push(newApplication);
  await writeDb(db);

  return NextResponse.json(newApplication);
}



// export async function POST(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {
//     try {
//   const body = await request.json();
//   const { userId } = body;

//   if (!userId) {
//     return NextResponse.json({ error: "User not authenticated" }, { status: 401 });
//   }

//   const db = await readDb();

//   // Check for duplicate
//   const existing = db.applications.find(
//     (app:Application) => app.jobId === params.id && app.userId === userId
//   );

//   if (existing) {
//     return NextResponse.json({ error: "Already applied" }, { status: 400 });
//   }

//   // Create Application
//   const newApplication = {
//     id: randomUUID(),
//     jobId: params.id,
//     userId: userId,
//     status: "pending" as const,
//     appliedDate: new Date().toISOString()
//   };

//   db.applications.push(newApplication);
//   await writeDb(db); // Save to JSON file

//   return NextResponse.json(newApplication);
// }catch (error) {
//     return NextResponse.json(
//       { message: 'Failed to apply' },
//       { status: 500 }
//     );
//   }
// }