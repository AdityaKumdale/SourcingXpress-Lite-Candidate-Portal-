module.exports = [
"[project]/app/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "getBaseUrl",
    ()=>getBaseUrl,
    "jobMatchesSearch",
    ()=>jobMatchesSearch
]);
function jobMatchesSearch(job, searchTerm) {
    if (!searchTerm) return true;
    const lowerSearchTerm = searchTerm.toLowerCase();
    const searchTerms = lowerSearchTerm.split(' ').filter((t)=>t);
    return searchTerms.every((term)=>{
        return job.title.toLowerCase().includes(term) || job.company.toLowerCase().includes(term) || job.location.toLowerCase().includes(term) || job.experience.toLowerCase().includes(term) || job.skills.some((skill)=>skill.toLowerCase().includes(term)) || job.companyType.some((type)=>type.toLowerCase().includes(term));
    });
}
function getBaseUrl() {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server needs full URL
    if (process.env.VERCEL_URL) {
        return `https://${process.env.VERCEL_URL}`;
    }
    return 'http://localhost:3000';
}
}),
"[project]/app/lib/api.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "applyToJob",
    ()=>applyToJob,
    "getAppliedJobs",
    ()=>getAppliedJobs,
    "getJob",
    ()=>getJob,
    "getJobs",
    ()=>getJobs,
    "loginUser",
    ()=>loginUser
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/utils.ts [app-ssr] (ecmascript)");
;
const BASE_URL = (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["getBaseUrl"])();
// Helper to safely construct URL in both Server and Client environments
function createUrl(path) {
    if ("TURBOPACK compile-time falsy", 0) //TURBOPACK unreachable
    ;
    // Server: BASE_URL should already be absolute (http://localhost:3000)
    return new URL(`${BASE_URL}${path}`);
}
async function getJobs(searchTerm) {
    const url = createUrl('/api/jobs');
    if (searchTerm) {
        url.searchParams.append('search', searchTerm);
    }
    const res = await fetch(url.toString(), {
        cache: 'no-store'
    });
    if (!res.ok) {
        // Throwing an error object that Next.js error boundaries can catch/display
        throw new Error("Failed to fetch jobs");
    }
    const data = await res.json();
    return data.jobs;
}
async function getJob(jobId) {
    const url = createUrl(`/api/jobs/${jobId}`);
    const res = await fetch(url.toString(), {
        cache: 'no-store'
    });
    if (!res.ok) {
        throw new Error(res.status === 404 ? "Job not found" : "Failed to fetch job details");
    }
    const data = await res.json();
    return data.job;
}
async function loginUser(creds) {
    // We use .toString() on the URL object to ensure it's formatted correctly
    const url = createUrl('/api/auth/login');
    const res = await fetch(url.toString(), {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(creds)
    });
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message || "Login failed",
            statusText: res.statusText,
            status: res.status
        };
    }
    return data;
}
async function applyToJob(jobId, userId) {
    const url = createUrl(`/api/jobs/${jobId}/apply`);
    const res = await fetch(url.toString(), {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: userId
        })
    });
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message || "Failed to apply",
            statusText: res.statusText,
            status: res.status
        };
    }
    return data;
}
async function getAppliedJobs(userId, searchTerm) {
    const url = createUrl('/api/applications');
    url.searchParams.append('userId', userId);
    if (searchTerm) {
        url.searchParams.append('search', searchTerm);
    }
    const res = await fetch(url.toString(), {
        cache: 'no-store'
    });
    const data = await res.json();
    if (!res.ok) {
        throw {
            message: data.message || 'Failed to fetch applications',
            statusText: res.statusText,
            status: res.status
        };
    }
    return data.jobs;
} // export async function getAppliedJobs(userId: string, searchTerm?: string | null) {
 //   const url = new URL(`${BASE_URL}/api/applications`);
 //   url.searchParams.append('userId', userId);
 //   if (searchTerm) {
 //     url.searchParams.append('search', searchTerm);
 //   }
 //   const res = await fetch(url.toString(), { cache: 'no-store' });
 //   const data = await res.json();
 //   if (!res.ok) {
 //     throw {
 //       message: data.message || 'Failed to fetch applications',
 //       statusText: res.statusText,
 //       status: res.status
 //     };
 //   }
 //   return data.jobs;
 // }
}),
"[project]/app/components/ApplySection.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ApplySection
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/lib/api.ts [app-ssr] (ecmascript)");
'use client';
;
;
;
;
// Inline Icons for stability
const Icons = {
    CheckCircle: ({ size = 20 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/app/components/ApplySection.tsx",
                lineNumber: 9,
                columnNumber: 123
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ApplySection.tsx",
            lineNumber: 9,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0)),
    CloseCircle: ({ size = 20 })=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
            width: size,
            height: size,
            fill: "none",
            stroke: "currentColor",
            viewBox: "0 0 24 24",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
                strokeLinecap: "round",
                strokeLinejoin: "round",
                strokeWidth: 2,
                d: "M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"
            }, void 0, false, {
                fileName: "[project]/app/components/ApplySection.tsx",
                lineNumber: 10,
                columnNumber: 123
            }, ("TURBOPACK compile-time value", void 0))
        }, void 0, false, {
            fileName: "[project]/app/components/ApplySection.tsx",
            lineNumber: 10,
            columnNumber: 37
        }, ("TURBOPACK compile-time value", void 0))
};
function ApplySection({ jobId }) {
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('idle');
    const [message, setMessage] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])('');
    async function handleApply(e) {
        e.preventDefault();
        // 1. Auth Check (Client Side)
        const isLoggedIn = localStorage.getItem("loggedin") === "true";
        if (!isLoggedIn) {
            router.push(`/login?message=Please log in first&redirectTo=/jobs/${jobId}`);
            return;
        }
        const user = JSON.parse(localStorage.getItem("user") || "{}");
        if (!user.id) {
            setMessage("User data not found. Please log in again.");
            setStatus('error');
            return;
        }
        // 2. Submit Application
        setStatus('submitting');
        try {
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$lib$2f$api$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["applyToJob"])(jobId, user.id);
            setStatus('success');
            setMessage("Successfully applied!");
        } catch (err) {
            setStatus('error');
            setMessage(err.message || "Failed to apply");
        }
    }
    const isApplying = status === 'submitting';
    const isSuccess = status === 'success';
    // Status Badge Appearance
    const statusColor = isSuccess ? 'text-green-600 bg-green-50 border-green-200' : 'text-red-600 bg-red-50 border-red-200';
    const StatusIcon = isSuccess ? Icons.CheckCircle : Icons.CloseCircle;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "mt-8",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row items-start sm:items-center gap-4",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleApply,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            disabled: isApplying || isSuccess,
                            className: "bg-orange-600 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none",
                            children: isApplying ? "Applying..." : isSuccess ? "Applied Successfully" : "Apply Now →"
                        }, void 0, false, {
                            fileName: "[project]/app/components/ApplySection.tsx",
                            lineNumber: 61,
                            columnNumber: 21
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/ApplySection.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    (status === 'success' || status === 'error') && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 px-4 py-2 rounded-lg border ${statusColor}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(StatusIcon, {
                                size: 20
                            }, void 0, false, {
                                fileName: "[project]/app/components/ApplySection.tsx",
                                lineNumber: 71,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                className: "font-medium",
                                children: message
                            }, void 0, false, {
                                fileName: "[project]/app/components/ApplySection.tsx",
                                lineNumber: 72,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/ApplySection.tsx",
                        lineNumber: 70,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/ApplySection.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                className: "text-xs text-gray-400 mt-4",
                children: "NOTE: Team leads/Architects who are ready to work on Hardcore Coding are also invited."
            }, void 0, false, {
                fileName: "[project]/app/components/ApplySection.tsx",
                lineNumber: 76,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/ApplySection.tsx",
        lineNumber: 58,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=app_94836614._.js.map