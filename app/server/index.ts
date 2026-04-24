import { router } from './trpc';
import { jobsRouter } from './routers/jobs';
import { authRouter } from './routers/auth';

export const appRouter = router({
  jobs: jobsRouter,
  auth: authRouter,
});

export type AppRouter = typeof appRouter;



export const serverClient = appRouter.createCaller({});











// This is the "Server Caller"
// It allows Server Actions to call tRPC procedures directly

// import { createCallerFactory } from '@trpc/server'; //Module '"@trpc/server"' has no exported member 'createCallerFactory'.
// const createCaller = createCallerFactory(appRouter);
// export const serverClient = createCaller({});

// // Correct server caller for tRPC v10+
// import { createCaller } from '@trpc/server';
// // For server actions/calls
// export const serverClient = createCaller<AppRouter>({
//   db: await readDb(),  // Your DB context
// });