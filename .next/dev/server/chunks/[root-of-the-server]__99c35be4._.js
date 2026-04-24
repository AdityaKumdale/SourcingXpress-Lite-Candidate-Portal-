module.exports = [
"[externals]/next/dist/compiled/next-server/app-route-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-route-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-route-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}),
"[externals]/next/dist/compiled/next-server/app-page-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/app-page-turbo.runtime.dev.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/app-page-turbo.runtime.dev.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/shared/lib/no-fallback-error.external.js [external] (next/dist/shared/lib/no-fallback-error.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/shared/lib/no-fallback-error.external.js", () => require("next/dist/shared/lib/no-fallback-error.external.js"));

module.exports = mod;
}),
"[project]/app/server/trpc.ts [app-route] (ecmascript) <locals>", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "protectedProcedure",
    ()=>protectedProcedure,
    "publicProcedure",
    ()=>publicProcedure,
    "router",
    ()=>router
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$initTRPC$2d$DGaJyg8t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/initTRPC-DGaJyg8t.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/tracked-DBSMdVzR.mjs [app-route] (ecmascript)");
;
const t = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$initTRPC$2d$DGaJyg8t$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["initTRPC"].create();
const router = t.router;
const publicProcedure = t.procedure;
const protectedProcedure = t.procedure.use(async (opts)=>{
    // In a real app, we'd check cookies/headers here. 
    // For your migration, we will validate userId in the input schema for now.
    return opts.next();
});
;
}),
"[externals]/fs/promises [external] (fs/promises, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("fs/promises", () => require("fs/promises"));

module.exports = mod;
}),
"[externals]/path [external] (path, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("path", () => require("path"));

module.exports = mod;
}),
"[project]/app/lib/db.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "readDb",
    ()=>readDb,
    "writeDb",
    ()=>writeDb
]);
var __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/fs/promises [external] (fs/promises, cjs)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/path [external] (path, cjs)");
;
;
// Path to your JSON file
const DB_PATH = __TURBOPACK__imported__module__$5b$externals$5d2f$path__$5b$external$5d$__$28$path$2c$__cjs$29$__["default"].join(process.cwd(), 'app/data/models.json');
async function readDb() {
    // const data = await fs.readFile(DB_PATH, 'utf-8');
    // return JSON.parse(data);
    try {
        const data = await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].readFile(DB_PATH, 'utf-8');
        return JSON.parse(data);
    } catch (error) {
        console.error('Error reading database:', error);
        // Return empty database structure if file doesn't exist
        return {
            jobs: [],
            users: [],
            applications: [],
            favorites: []
        };
    }
}
async function writeDb(data) {
    //  await fs.writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    try {
        await __TURBOPACK__imported__module__$5b$externals$5d2f$fs$2f$promises__$5b$external$5d$__$28$fs$2f$promises$2c$__cjs$29$__["default"].writeFile(DB_PATH, JSON.stringify(data, null, 2), 'utf-8');
    } catch (error) {
        console.error('Error writing database:', error);
        throw error;
    }
}
}),
"[externals]/crypto [external] (crypto, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("crypto", () => require("crypto"));

module.exports = mod;
}),
"[project]/app/server/routers/jobs.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "jobsRouter",
    ()=>jobsRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/server/trpc.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/tracked-DBSMdVzR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/db.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__ = __turbopack_context__.i("[externals]/crypto [external] (crypto, cjs)");
;
;
;
;
const jobsRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["router"])({
    // Get All Jobs (from api/jobs/route.ts)
    list: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).query(async ({ input })=>{
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDb"])();
        let jobs = db.jobs;
        if (input.search) {
            const searchTerms = input.search.toLowerCase().split(' ').filter((t)=>t) //Keeps only truthy values (non-empty strings)
            ;
            jobs = jobs.filter((job)=>{
                return searchTerms.every((term)=>job.title.toLowerCase().includes(term) || job.company.toLowerCase().includes(term) || job.location.toLowerCase().includes(term) || job.skills.some((skill)=>skill.toLowerCase().includes(term)));
            });
        }
        return jobs;
    }),
    //  Get Single Job (from api/jobs/[id]/route.ts)
    byId: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        id: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).query(async ({ input })=>{
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDb"])();
        const job = db.jobs.find((j)=>j.id === input.id);
        if (!job) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'NOT_FOUND',
                message: 'Job not found'
            });
        }
        return job;
    }),
    //  Apply to Job (from api/jobs/[id]/apply/route.ts)
    submit: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        jobId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(async ({ input })=>{
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDb"])();
        // Check for duplicates
        const existing = db.applications.find((app)=>app.jobId === input.jobId && app.userId === input.userId);
        if (existing) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'CONFLICT',
                message: 'Already applied to this job'
            });
        }
        const newApplication = {
            id: (0, __TURBOPACK__imported__module__$5b$externals$5d2f$crypto__$5b$external$5d$__$28$crypto$2c$__cjs$29$__["randomUUID"])(),
            jobId: input.jobId,
            userId: input.userId,
            status: "pending",
            appliedDate: new Date().toISOString()
        };
        db.applications.push(newApplication);
        await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["writeDb"])(db);
        return newApplication;
    }),
    // Get Applied Jobs (from app/api/applications/route.ts)
    getApplied: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        userId: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string(),
        search: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().optional()
    })).query(async ({ input })=>{
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDb"])();
        // Get applications for this user
        const userApps = db.applications.filter((app)=>app.userId === input.userId);
        // Create a map of jobId -> status
        const appStatusMap = new Map();
        userApps.forEach((app)=>appStatusMap.set(app.jobId, app.status));
        const appliedJobIds = Array.from(appStatusMap.keys());
        // Filter jobs
        let jobs = db.jobs.filter((job)=>appliedJobIds.includes(job.id));
        // Apply search filter if exists
        if (input.search) {
            const searchTerms = input.search.toLowerCase().split(' ').filter((t)=>t);
            jobs = jobs.filter((job)=>{
                return searchTerms.every((term)=>job.title.toLowerCase().includes(term) || job.company.toLowerCase().includes(term) || job.location.toLowerCase().includes(term));
            });
        }
        // Return jobs with status
        return jobs.map((job)=>({
                ...job,
                applicationStatus: appStatusMap.get(job.id)
            }));
    })
});
}),
"[project]/app/server/routers/auth.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "authRouter",
    ()=>authRouter
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/server/trpc.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/tracked-DBSMdVzR.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__ = __turbopack_context__.i("[project]/node_modules/zod/v4/classic/external.js [app-route] (ecmascript) <export * as z>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/db.ts [app-route] (ecmascript)");
;
;
;
const authRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["router"])({
    login: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["publicProcedure"].input(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].object({
        email: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string().email(),
        password: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$zod$2f$v4$2f$classic$2f$external$2e$js__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$export__$2a$__as__z$3e$__["z"].string()
    })).mutation(async ({ input })=>{
        const db = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$db$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["readDb"])();
        const user = db.users.find((u)=>u.email === input.email && u.password === input.password);
        if (!user) {
            throw new __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$tracked$2d$DBSMdVzR$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["TRPCError"]({
                code: 'UNAUTHORIZED',
                message: 'Invalid credentials'
            });
        }
        // Remove password
        const { password: _, ...userWithoutPass } = user;
        return {
            user: userWithoutPass,
            token: `fake-token-for-${user.id}`
        };
    })
});
}),
"[project]/app/server/index.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "appRouter",
    ()=>appRouter,
    "serverClient",
    ()=>serverClient
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/app/server/trpc.ts [app-route] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$routers$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/server/routers/jobs.ts [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$routers$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/server/routers/auth.ts [app-route] (ecmascript)");
;
;
;
const appRouter = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$trpc$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__$3c$locals$3e$__["router"])({
    jobs: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$routers$2f$jobs$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["jobsRouter"],
    auth: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$routers$2f$auth$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["authRouter"]
});
const serverClient = appRouter.createCaller({}); // This is the "Server Caller"
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
}),
"[project]/app/api/trpc/[trpc]/route.ts [app-route] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "GET",
    ()=>handler,
    "POST",
    ()=>handler
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/@trpc/server/dist/adapters/fetch/index.mjs [app-route] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/server/index.ts [app-route] (ecmascript)"); // Your existing router
;
;
const handler = (req)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$trpc$2f$server$2f$dist$2f$adapters$2f$fetch$2f$index$2e$mjs__$5b$app$2d$route$5d$__$28$ecmascript$29$__["fetchRequestHandler"])({
        endpoint: '/api/trpc',
        req,
        router: __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$server$2f$index$2e$ts__$5b$app$2d$route$5d$__$28$ecmascript$29$__["appRouter"],
        createContext: ()=>({})
    });
;
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__99c35be4._.js.map