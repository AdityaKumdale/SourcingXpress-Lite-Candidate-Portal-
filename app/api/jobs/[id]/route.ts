
import { NextResponse } from 'next/server';
import { readDb } from '../../../lib/db';
import { Job } from '../../../types/types';


export async function GET(
  request: Request,
  { params }: { params: Promise<{ id: string }> } // Params is a Promise in Next.js 15
) {
  // Await params before access
  const { id } = await params;

  const db = await readDb();
  
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
