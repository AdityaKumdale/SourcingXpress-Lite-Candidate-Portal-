'use server'

import { serverClient } from "../server";
import { z, ZodError } from 'zod'; 
import { readDb, writeDb } from '../lib/db'; 
import { randomUUID } from 'crypto';
import { revalidatePath } from "next/cache";




const ApplySchema = z.object({
  jobId: z.string(),
  userId: z.string(),
});

export async function applyToJobAction(jobId: string, userId: string) {
  try {
    //  VALIDATION 
    const input = ApplySchema.parse({ jobId, userId });// instead of tRPC doing this automatically, we call .parse() manually

    //  DATABASE LOGIC 
    const db = await readDb();

    // Check for duplicates
    const existing = db.applications.find(
      app => app.jobId === input.jobId && app.userId === input.userId
    );

    if (existing) {
     
      return { success: false, error: "Already applied to this job" };       // Instead of throwing a TRPCError, we just return a normal object
    }

   
    const newApplication = {
      id: randomUUID(),
      jobId: input.jobId,
      userId: input.userId,
      status: "pending" as const,
      appliedDate: new Date().toISOString()
    };

    db.applications.push(newApplication);
    await writeDb(db);

    
    revalidatePath('/jobs'); 
    
    return { success: true, data: newApplication };

  } catch (error: any) {
    // //  Zod validation errors or DB errors
    // const errorMessage = error instanceof z.ZodError 
    //     ? error.errors[0].message 
    //     : error.message;
    //              error.issues[0]?.message || 'Validation failed';
    // return { success: false, error: errorMessage };

     let errorMessage = 'An unexpected error occurred';
    if (error instanceof ZodError) {
      errorMessage = error.issues[0]?.message || 'Validation failed';
    } else if (error instanceof Error) {
      errorMessage = error.message;
    }
    return { success: false, error: errorMessage };
  }
}


// export async function applyToJobAction(jobId: string, userId: string) {
//   try {
//    // const result = await serverClient.jobs.apply({ jobId, userId });
//     const result = await serverClient.jobs.submit({ jobId, userId });

//     revalidatePath('/jobs'); 
    
//     return { success: true, data: result };
//   } catch (error: any) {
//     return { success: false, error: error.message };
//   }
// }

//  Action to fetch applied jobs for Client Components
export async function getAppliedJobsAction(userId: string, search?: string) {
  try {
    const jobs = await serverClient.jobs.getApplied({ userId, search });
    return { success: true, data: jobs };
  } catch (error: any) {
    console.error("Action Error:", error);
    return { success: false, error: error.message, data: [] };
  }
}









// // "Hybrid" approach:
// // Server Action (Transport) -> calls tRPC (Logic/Validation)