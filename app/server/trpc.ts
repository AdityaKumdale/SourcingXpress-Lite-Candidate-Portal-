import { initTRPC, TRPCError } from '@trpc/server';
import { z } from 'zod';

const t = initTRPC.create();

export const router = t.router;
export const publicProcedure = t.procedure;

// Middleware to check if user is authenticated (Optional for now, but good practice)
// Since your current app passes userId in the body, we can keep it simple first.
export const protectedProcedure = t.procedure.use(async (opts) => {
  // In a real app, we'd check cookies/headers here. 
  // For your migration, we will validate userId in the input schema for now.
  return opts.next();
});

export { TRPCError };