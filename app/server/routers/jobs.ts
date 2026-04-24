import { router, publicProcedure, TRPCError } from '../trpc';
import { z } from 'zod';
import { readDb, writeDb } from '../../lib/db';
import { randomUUID } from 'crypto';


//Replaces api/jobs, api/jobs/[id], and api/applications)

export const jobsRouter = router({
  // Get All Jobs (from api/jobs/route.ts)
  list: publicProcedure
    .input(z.object({ search: z.string().optional() }))
    .query(async ({ input }) => {
      const db = await readDb();
      let jobs = db.jobs;

      if (input.search) {
        const searchTerms = input.search.toLowerCase().split(' ').filter(t => t)  //Keeps only truthy values (non-empty strings)
        jobs = jobs.filter(job => {
          return searchTerms.every(term =>
            job.title.toLowerCase().includes(term) ||
            job.company.toLowerCase().includes(term) ||
            job.location.toLowerCase().includes(term) ||
            job.skills.some(skill => skill.toLowerCase().includes(term))
          );
        });
      }
      return jobs;
    }),

  //  Get Single Job (from api/jobs/[id]/route.ts)
  byId: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const db = await readDb();
      const job = db.jobs.find((j) => j.id === input.id);

      if (!job) {
        throw new TRPCError({ code: 'NOT_FOUND', message: 'Job not found' });
      }
      return job;
    }),

  //  Apply to Job (from api/jobs/[id]/apply/route.ts)
  submit: publicProcedure
    .input(z.object({
      jobId: z.string(),
      userId: z.string()
    }))
    .mutation(async ({ input }) => {
      const db = await readDb();

      // Check for duplicates
      const existing = db.applications.find(
        app => app.jobId === input.jobId && app.userId === input.userId
      );

      if (existing) {
        throw new TRPCError({
          code: 'CONFLICT',
          message: 'Already applied to this job'
        });
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

      return newApplication;
    }),


  // Get Applied Jobs (from app/api/applications/route.ts)
  getApplied: publicProcedure
    .input(z.object({
      userId: z.string(),
      search: z.string().optional()
    }))
    .query(async ({ input }) => {
      const db = await readDb();

      // Get applications for this user
      const userApps = db.applications.filter(app => app.userId === input.userId);

      // Create a map of jobId -> status
      const appStatusMap = new Map<string, "pending" | "reviewed" | "rejected">();
      userApps.forEach(app => appStatusMap.set(app.jobId, app.status));

      const appliedJobIds = Array.from(appStatusMap.keys());

      // Filter jobs
      let jobs = db.jobs.filter(job => appliedJobIds.includes(job.id));

      // Apply search filter if exists
      if (input.search) {
        const searchTerms = input.search.toLowerCase().split(' ').filter(t => t);
        jobs = jobs.filter(job => {
          return searchTerms.every(term =>
            job.title.toLowerCase().includes(term) ||
            job.company.toLowerCase().includes(term) ||
            job.location.toLowerCase().includes(term)
          );
        });
      }

      // Return jobs with status
      return jobs.map(job => ({
        ...job,
        applicationStatus: appStatusMap.get(job.id)
      }));
    }),





});