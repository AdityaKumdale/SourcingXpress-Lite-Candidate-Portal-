
import { NextResponse } from 'next/server';
import { readDb } from '../../../lib/db';
import { Job } from '../../../types/types';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // 1. Type as Promise
) {
  // 2. Await the params object
  const { id } = await params;

  const db = await readDb();
  
  // 3. Use the awaited id
  const job = db.jobs.find((j) => j.id === id);

  if (!job) {
    return NextResponse.json({ error: "Job not found" }, { status: 404 });
  }

  return NextResponse.json({ job });
}



// export async function GET(
//   request: Request,
//   { params }: { params: { id: string } }
// ) {

//   try {
//     const db = await readDb();
//     const job = db.jobs.find((j: Job) => j.id === params.id);

//     if (!job) {
//       return NextResponse.json({ error: "Job not found" }, { status: 404 });
//     }

//     return NextResponse.json({ job });
//   } catch (error) {
//     return NextResponse.json(
//       { message: 'Failed to fetch job' },
//       { status: 500 }
//     )
//   }

// }
