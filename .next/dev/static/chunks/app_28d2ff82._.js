(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/components/Tab.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Tabs
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
function Tabs({ liveCount, appliedCount }) {
    _s();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentTab = searchParams.get('tab') || 'live';
    const searchTerm = searchParams.get('search') || '';
    const getTabUrl = (targetTab)=>{
        const params = new URLSearchParams();
        if (searchTerm) params.set('search', searchTerm);
        params.set('tab', targetTab);
        return `?${params.toString()}`;
    };
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useLayoutEffect"])({
        "Tabs.useLayoutEffect": ()=>{
            if (currentTab === 'live') {
                const savedPositionLive = sessionStorage.getItem("liveJobListScrollY");
                if (savedPositionLive) {
                    window.scrollTo(0, parseInt(savedPositionLive));
                } else {
                    window.scrollTo(0, 0);
                }
                return ({
                    "Tabs.useLayoutEffect": ()=>{
                        sessionStorage.setItem("liveJobListScrollY", window.scrollY.toString());
                    }
                })["Tabs.useLayoutEffect"];
            }
            if (currentTab === 'applied') {
                const savedPositionLive = sessionStorage.getItem("appliedJobListScrollY");
                if (savedPositionLive) {
                    window.scrollTo(0, parseInt(savedPositionLive));
                } else {
                    window.scrollTo(0, 0);
                }
                return ({
                    "Tabs.useLayoutEffect": ()=>{
                        sessionStorage.setItem("appliedJobListScrollY", window.scrollY.toString());
                    }
                })["Tabs.useLayoutEffect"];
            }
        }
    }["Tabs.useLayoutEffect"], [
        currentTab
    ]);
    //  useLayoutEffect(() => {
    //     // Give JobList time to render the necessary cards
    //     const timer = setTimeout(() => {
    //       if (currentTab === 'live') {
    //         const savedPosition = sessionStorage.getItem("liveJobListScrollY");
    //         if (savedPosition) {
    //           window.scrollTo(0, parseInt(savedPosition));
    //         } else {
    //           window.scrollTo(0, 0);
    //         }
    //       } else if (currentTab === 'applied') {
    //         const savedPosition = sessionStorage.getItem("appliedJobListScrollY");
    //         if (savedPosition) {
    //           window.scrollTo(0, parseInt(savedPosition));
    //         } else {
    //           window.scrollTo(0, 0);
    //         }
    //       }
    //     }, 100); // Small delay to let cards render
    //     // Save scroll position continuously
    //     const handleScroll = () => {
    //       if (currentTab === 'live') {
    //         sessionStorage.setItem("liveJobListScrollY", window.scrollY.toString());
    //       } else if (currentTab === 'applied') {
    //         sessionStorage.setItem("appliedJobListScrollY", window.scrollY.toString());
    //       }
    //     };
    //     window.addEventListener('scroll', handleScroll, { passive: true });
    //     return () => {
    //       clearTimeout(timer);
    //       window.removeEventListener('scroll', handleScroll);
    //       // Final save on cleanup
    //       handleScroll();
    //     };
    //   }, [currentTab]);
    const containerStyle = "flex bg-gray-200 p-1 rounded-lg mb-6 w-full   shadow-[0_-10px_15px_-3px_rgba(0,0,0,0.1),0_10px_15px_-3px_rgba(0,0,0,0.1)] shadow-white  "; //bg-white/30 backdrop-blur-md
    const activeStyle = "bg-white text-slate-900 shadow-sm cursor-default";
    const inactiveStyle = "text-gray-500 hover:text-gray-700 hover:bg-gray-200/50 cursor-pointer";
    const tabBaseStyle = "flex-1 py-2 px-4 text-center text-sm font-semibold rounded-md transition-all duration-200 select-none";
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: containerStyle,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: getTabUrl('live'),
                onClick: (e)=>{
                    if (currentTab === 'live') e.preventDefault();
                },
                //onClick={(e) => handleTabClick(e, 'live')} //small error : Parameter 'e' implicitly has an 'any' type.
                className: `${tabBaseStyle} ${currentTab === 'live' ? activeStyle : inactiveStyle}`,
                scroll: false,
                children: [
                    "Live Jobs",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 opacity-80",
                        children: [
                            "(",
                            liveCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Tab.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Tab.tsx",
                lineNumber: 120,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                href: getTabUrl('applied'),
                onClick: (e)=>{
                    if (currentTab === 'applied') e.preventDefault();
                },
                // onClick={(e) => handleTabClick(e, 'applied')}  //small error : Parameter 'e' implicitly has an 'any' type.
                className: `${tabBaseStyle} ${currentTab === 'applied' ? activeStyle : inactiveStyle}`,
                scroll: false,
                children: [
                    "Applied Jobs",
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "ml-1 opacity-80",
                        children: [
                            "(",
                            appliedCount,
                            ")"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/Tab.tsx",
                        lineNumber: 147,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/Tab.tsx",
                lineNumber: 139,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Tab.tsx",
        lineNumber: 119,
        columnNumber: 5
    }, this);
}
_s(Tabs, "WU20Xdi3FCmga2CUuEGeold3ARs=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = Tabs;
var _c;
__turbopack_context__.k.register(_c, "Tabs");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/Badge.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Badge
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
;
function Badge({ title, icon: Icon, className = "" }) {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `
        inline-flex items-center justify-center gap-1.5 
        px-3 py-1 rounded-full text-xs font-medium 
        bg-orange-50 text-slate-700 border border-orange-100
        ${className} 
      `,
        children: [
            Icon && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(Icon, {
                className: "text-slate-500",
                size: 14
            }, void 0, false, {
                fileName: "[project]/app/components/Badge.tsx",
                lineNumber: 22,
                columnNumber: 16
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                className: "whitespace-nowrap",
                children: title
            }, void 0, false, {
                fileName: "[project]/app/components/Badge.tsx",
                lineNumber: 23,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/Badge.tsx",
        lineNumber: 14,
        columnNumber: 5
    }, this);
}
_c = Badge;
var _c;
__turbopack_context__.k.register(_c, "Badge");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/JobCard.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Badge.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/io5/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/fa/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/lu/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/ci/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/hi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/react-icons/pi/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
'use client';
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
;
function Card({ jobData }) {
    const getStatusAppearance = (status)=>{
        switch(status.toLowerCase()){
            case 'reviewed':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCheckmarkCircleOutline"],
                    color: 'text-green-700',
                    bg: 'bg-green-50 border-green-200'
                };
            case 'rejected':
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoCloseCircleOutline"],
                    color: 'text-red-700',
                    bg: 'bg-red-50 border-red-200'
                };
            case 'pending':
            default:
                return {
                    icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoDocumentTextOutline"],
                    color: 'text-yellow-700',
                    bg: 'bg-yellow-50 border-yellow-200'
                };
        }
    };
    const statusInfo = jobData.applicationStatus ? getStatusAppearance(jobData.applicationStatus) : null;
    const renderSkills = ()=>{
        const skills = jobData.skills || [];
        const MAX_VISIBLE_SKILLS = 5;
        if (skills.length <= MAX_VISIBLE_SKILLS) {
            return skills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: skill,
                    className: "bg-orange-50 text-orange-800 border-orange-100"
                }, skill, false, {
                    fileName: "[project]/app/components/JobCard.tsx",
                    lineNumber: 52,
                    columnNumber: 9
                }, this));
        }
        const visibleSkills = skills.slice(0, MAX_VISIBLE_SKILLS);
        const remainingCount = skills.length - MAX_VISIBLE_SKILLS;
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
            children: [
                visibleSkills.map((skill)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: skill,
                        className: "bg-orange-50 text-orange-800 border-orange-100"
                    }, skill, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 62,
                        columnNumber: 11
                    }, this)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    title: `+${remainingCount} Skills`,
                    className: "bg-slate-100 text-slate-600 border-slate-200"
                }, void 0, false, {
                    fileName: "[project]/app/components/JobCard.tsx",
                    lineNumber: 64,
                    columnNumber: 9
                }, this)
            ]
        }, void 0, true);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "bg-white border border-gray-200 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow duration-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-slate-900 mb-1",
                            children: jobData.title
                        }, void 0, false, {
                            fileName: "[project]/app/components/JobCard.tsx",
                            lineNumber: 75,
                            columnNumber: 11
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 74,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        title: jobData.workMode,
                        icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$io5$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["IoLocationOutline"]
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 78,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobCard.tsx",
                lineNumber: 73,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 lg:grid-cols-2 gap-x-8 gap-y-6 mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-700",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaBuilding"], {
                                        className: "text-slate-400 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 93,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-semibold",
                                        children: jobData.company
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 94,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 92,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex flex-wrap gap-2",
                                children: [
                                    (jobData.companyType || []).map((type)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Badge$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                            title: type,
                                            className: "bg-orange-50/50 text-orange-700 text-[10px] px-2 py-0.5"
                                        }, type, false, {
                                            fileName: "[project]/app/components/JobCard.tsx",
                                            lineNumber: 100,
                                            columnNumber: 15
                                        }, this)),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs text-slate-500 ml-1 flex items-center gap-1",
                                        children: jobData.stage && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                            children: [
                                                "🚀 ",
                                                jobData.stage
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/app/components/JobCard.tsx",
                                            lineNumber: 104,
                                            columnNumber: 34
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 98,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-600 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuFactory"], {
                                        className: "text-slate-400 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: jobData.industry
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 111,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-600 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiLocationOn"], {
                                        className: "text-slate-400 w-5 h-5 -ml-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 116,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: jobData.location
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 117,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 115,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-900 font-medium text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$ci$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CiMoneyBill"], {
                                        className: "text-slate-400 w-5 h-5 -ml-0.5"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 122,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: jobData.salary
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 123,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 121,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 90,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-600 text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$pi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PiSuitcase"], {
                                        className: "text-slate-400 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 132,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: jobData.employmentType
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 133,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 131,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-2 text-slate-900 font-medium text-sm",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$lu$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["LuClock4"], {
                                        className: "text-slate-400 w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 138,
                                        columnNumber: 15
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: [
                                            "Experience: ",
                                            jobData.experience
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 139,
                                        columnNumber: 15
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 137,
                                columnNumber: 12
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "space-y-2",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex items-center gap-2 text-slate-500 text-sm",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$hi$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["HiOutlineLightBulb"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 145,
                                                columnNumber: 16
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                children: "Skills"
                                            }, void 0, false, {
                                                fileName: "[project]/app/components/JobCard.tsx",
                                                lineNumber: 146,
                                                columnNumber: 16
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 144,
                                        columnNumber: 14
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "flex flex-wrap gap-2",
                                        children: renderSkills()
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 148,
                                        columnNumber: 14
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 143,
                                columnNumber: 12
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 128,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobCard.tsx",
                lineNumber: 87,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center justify-between pt-4 border-t border-gray-100 mt-auto",
                children: [
                    jobData.applicationStatus && statusInfo ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `flex items-center gap-2 px-3 py-1.5 rounded-lg border text-sm font-medium ${statusInfo.bg} ${statusInfo.color}`,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(statusInfo.icon, {}, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 162,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                children: [
                                    "Status: ",
                                    jobData.applicationStatus
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 163,
                                columnNumber: 14
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 161,
                        columnNumber: 11
                    }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3 w-full sm:w-auto",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/jobs/${jobData.id}`,
                                className: "flex-1 sm:flex-none flex items-center justify-center gap-2 bg-orange-600 hover:bg-orange-700 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors",
                                children: [
                                    "Apply ",
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$react$2d$icons$2f$fa$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["FaArrowRight"], {
                                        size: 12
                                    }, void 0, false, {
                                        fileName: "[project]/app/components/JobCard.tsx",
                                        lineNumber: 172,
                                        columnNumber: 21
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 168,
                                columnNumber: 13
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                href: `/jobs/${jobData.id}`,
                                className: "flex-1 sm:flex-none flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-6 py-2 rounded-lg transition-colors",
                                children: "View Details"
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobCard.tsx",
                                lineNumber: 175,
                                columnNumber: 13
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 167,
                        columnNumber: 11
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-xs text-slate-400 hidden sm:block",
                        children: "Posted Today"
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobCard.tsx",
                        lineNumber: 184,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobCard.tsx",
                lineNumber: 157,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/JobCard.tsx",
        lineNumber: 70,
        columnNumber: 5
    }, this);
}
_c = Card;
const __TURBOPACK__default__export__ = /*#__PURE__*/ _c1 = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"].memo(Card);
var _c, _c1;
__turbopack_context__.k.register(_c, "Card");
__turbopack_context__.k.register(_c1, "%default%");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/JobList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/JobCard.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
function JobList({ jobs, searchTerm, currentTab, onClear, storageKey }) {
    _s();
    // Initialize from session storage
    // const [visibleCount, setVisibleCount] = useState(() => {
    //     if (typeof window !== 'undefined') {
    //         const savedCount = sessionStorage.getItem(`${storageKey}_count`);
    //         return savedCount ? parseInt(savedCount, 10) : 10;
    //     }
    //     return 10;
    // })
    const [visibleCount, setVisibleCount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(10);
    const loadMoreRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    // useLayoutEffect(() => {
    //     if (typeof window !== 'undefined' && 'scrollRestoration' in window.history) {
    //         window.history.scrollRestoration = 'manual';
    //     }
    //     const savedPosition = sessionStorage.getItem(`${storageKey}_scroll`);
    //     if (savedPosition) {
    //         window.scrollTo(0, parseInt(savedPosition, 10));
    //     } else {
    //         window.scrollTo(0, 0);
    //     }
    // }, []); 
    // useEffect(() => {
    //     const saveState = () => {
    //         sessionStorage.setItem(`${storageKey}_count`, visibleCount.toString());
    //         sessionStorage.setItem(`${storageKey}_scroll`, window.scrollY.toString());
    //     };
    //     // Save on unload/change
    //     return () => saveState();
    // }, [visibleCount, storageKey]); 
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobList.useEffect": ()=>{
            const observer = new IntersectionObserver({
                "JobList.useEffect": (entries)=>{
                    const target = entries[0];
                    if (target.isIntersecting && visibleCount < jobs.length) {
                        setTimeout({
                            "JobList.useEffect": ()=>{
                                setVisibleCount({
                                    "JobList.useEffect": (prev)=>prev + 10
                                }["JobList.useEffect"]);
                            }
                        }["JobList.useEffect"], 500);
                    }
                }
            }["JobList.useEffect"], {
                root: null,
                rootMargin: "100px",
                threshold: 0.1
            });
            const currentRef = loadMoreRef.current;
            if (currentRef) observer.observe(currentRef);
            return ({
                "JobList.useEffect": ()=>{
                    if (currentRef) observer.unobserve(currentRef);
                }
            })["JobList.useEffect"];
        }
    }["JobList.useEffect"], [
        visibleCount,
        jobs.length
    ]);
    if (jobs.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "text-center p-10",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-2xl font-semibold mb-4 text-gray-700",
                    children: searchTerm ? `No ${currentTab === 'applied' ? 'applied' : ''} jobs found for "${searchTerm}".` : `No ${currentTab === 'applied' ? 'applied' : ''} jobs found.`
                }, void 0, false, {
                    fileName: "[project]/app/components/JobList.tsx",
                    lineNumber: 60,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                    onClick: onClear,
                    className: "bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600",
                    children: "Clear Search"
                }, void 0, false, {
                    fileName: "[project]/app/components/JobList.tsx",
                    lineNumber: 66,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/app/components/JobList.tsx",
            lineNumber: 59,
            columnNumber: 13
        }, this);
    }
    const visibleJobs = jobs.slice(0, visibleCount);
    const hasMore = visibleCount < jobs.length;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                className: "text-center text-lg font-medium mb-4 text-gray-600",
                children: [
                    "Found ",
                    jobs.length,
                    " ",
                    jobs.length === 1 ? 'job' : 'jobs',
                    "."
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobList.tsx",
                lineNumber: 78,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex flex-col gap-4 mt-2",
                children: visibleJobs.map((job)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobCard$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        jobData: job
                    }, job.id, false, {
                        fileName: "[project]/app/components/JobList.tsx",
                        lineNumber: 83,
                        columnNumber: 41
                    }, this))
            }, void 0, false, {
                fileName: "[project]/app/components/JobList.tsx",
                lineNumber: 82,
                columnNumber: 13
            }, this),
            hasMore && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                ref: loadMoreRef,
                className: "h-24 flex items-center justify-center p-4 opacity-50",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"
                }, void 0, false, {
                    fileName: "[project]/app/components/JobList.tsx",
                    lineNumber: 88,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/JobList.tsx",
                lineNumber: 87,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true);
}
_s(JobList, "NsF2joLwLdgXonNeSMTflC+DIdA=");
_c = JobList;
var _c;
__turbopack_context__.k.register(_c, "JobList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/actions/data:ee07d3 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"609a49f1e58a750104aedf45e46891351189b5ff16":"getAppliedJobsAction"},"app/actions/jobActions.ts",""] */ __turbopack_context__.s([
    "getAppliedJobsAction",
    ()=>getAppliedJobsAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var getAppliedJobsAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("609a49f1e58a750104aedf45e46891351189b5ff16", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "getAppliedJobsAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vam9iQWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyIndXNlIHNlcnZlcidcclxuXHJcbmltcG9ydCB7IHNlcnZlckNsaWVudCB9IGZyb20gXCIuLi9zZXJ2ZXJcIjtcclxuaW1wb3J0IHsgeiwgWm9kRXJyb3IgfSBmcm9tICd6b2QnOyBcclxuaW1wb3J0IHsgcmVhZERiLCB3cml0ZURiIH0gZnJvbSAnLi4vbGliL2RiJzsgXHJcbmltcG9ydCB7IHJhbmRvbVVVSUQgfSBmcm9tICdjcnlwdG8nO1xyXG5pbXBvcnQgeyByZXZhbGlkYXRlUGF0aCB9IGZyb20gXCJuZXh0L2NhY2hlXCI7XHJcblxyXG5cclxuLy8gUmVtb3ZlICdzZXJ2ZXJDbGllbnQnLiBXZSBkb24ndCBuZWVkIHRoZSB0UlBDIHR1bm5lbCBhbnltb3JlLlxyXG5cclxuY29uc3QgQXBwbHlTY2hlbWEgPSB6Lm9iamVjdCh7XHJcbiAgam9iSWQ6IHouc3RyaW5nKCksXHJcbiAgdXNlcklkOiB6LnN0cmluZygpLFxyXG59KTtcclxuXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseVRvSm9iQWN0aW9uKGpvYklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIC8vICBWQUxJREFUSU9OIFxyXG4gICAgY29uc3QgaW5wdXQgPSBBcHBseVNjaGVtYS5wYXJzZSh7IGpvYklkLCB1c2VySWQgfSk7Ly8gaW5zdGVhZCBvZiB0UlBDIGRvaW5nIHRoaXMgYXV0b21hdGljYWxseSwgd2UgY2FsbCAucGFyc2UoKSBtYW51YWxseVxyXG5cclxuICAgIC8vICBEQVRBQkFTRSBMT0dJQyBcclxuICAgIGNvbnN0IGRiID0gYXdhaXQgcmVhZERiKCk7XHJcblxyXG4gICAgLy8gQ2hlY2sgZm9yIGR1cGxpY2F0ZXNcclxuICAgIGNvbnN0IGV4aXN0aW5nID0gZGIuYXBwbGljYXRpb25zLmZpbmQoXHJcbiAgICAgIGFwcCA9PiBhcHAuam9iSWQgPT09IGlucHV0LmpvYklkICYmIGFwcC51c2VySWQgPT09IGlucHV0LnVzZXJJZFxyXG4gICAgKTtcclxuXHJcbiAgICBpZiAoZXhpc3RpbmcpIHtcclxuICAgICAgLy8gSW5zdGVhZCBvZiB0aHJvd2luZyBhIFRSUENFcnJvciwgd2UganVzdCByZXR1cm4gYSBub3JtYWwgb2JqZWN0XHJcbiAgICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogXCJBbHJlYWR5IGFwcGxpZWQgdG8gdGhpcyBqb2JcIiB9O1xyXG4gICAgfVxyXG5cclxuICAgXHJcbiAgICBjb25zdCBuZXdBcHBsaWNhdGlvbiA9IHtcclxuICAgICAgaWQ6IHJhbmRvbVVVSUQoKSxcclxuICAgICAgam9iSWQ6IGlucHV0LmpvYklkLFxyXG4gICAgICB1c2VySWQ6IGlucHV0LnVzZXJJZCxcclxuICAgICAgc3RhdHVzOiBcInBlbmRpbmdcIiBhcyBjb25zdCxcclxuICAgICAgYXBwbGllZERhdGU6IG5ldyBEYXRlKCkudG9JU09TdHJpbmcoKVxyXG4gICAgfTtcclxuXHJcbiAgICBkYi5hcHBsaWNhdGlvbnMucHVzaChuZXdBcHBsaWNhdGlvbik7XHJcbiAgICBhd2FpdCB3cml0ZURiKGRiKTtcclxuXHJcbiAgICBcclxuICAgIHJldmFsaWRhdGVQYXRoKCcvam9icycpOyBcclxuICAgIFxyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogdHJ1ZSwgZGF0YTogbmV3QXBwbGljYXRpb24gfTtcclxuXHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgLy8gLy8gQ2F0Y2ggWm9kIHZhbGlkYXRpb24gZXJyb3JzIG9yIERCIGVycm9yc1xyXG4gICAgLy8gY29uc3QgZXJyb3JNZXNzYWdlID0gZXJyb3IgaW5zdGFuY2VvZiB6LlpvZEVycm9yIFxyXG4gICAgLy8gICAgID8gZXJyb3IuZXJyb3JzWzBdLm1lc3NhZ2UgXHJcbiAgICAvLyAgICAgOiBlcnJvci5tZXNzYWdlO1xyXG4gICAgLy8gICAgICAgICAgICAgIGVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCAnVmFsaWRhdGlvbiBmYWlsZWQnO1xyXG4gICAgLy8gcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvck1lc3NhZ2UgfTtcclxuXHJcbiAgICAgbGV0IGVycm9yTWVzc2FnZSA9ICdBbiB1bmV4cGVjdGVkIGVycm9yIG9jY3VycmVkJztcclxuICAgIGlmIChlcnJvciBpbnN0YW5jZW9mIFpvZEVycm9yKSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLmlzc3Vlc1swXT8ubWVzc2FnZSB8fCAnVmFsaWRhdGlvbiBmYWlsZWQnO1xyXG4gICAgfSBlbHNlIGlmIChlcnJvciBpbnN0YW5jZW9mIEVycm9yKSB7XHJcbiAgICAgIGVycm9yTWVzc2FnZSA9IGVycm9yLm1lc3NhZ2U7XHJcbiAgICB9XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiBmYWxzZSwgZXJyb3I6IGVycm9yTWVzc2FnZSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcbi8vIGV4cG9ydCBhc3luYyBmdW5jdGlvbiBhcHBseVRvSm9iQWN0aW9uKGpvYklkOiBzdHJpbmcsIHVzZXJJZDogc3RyaW5nKSB7XHJcbi8vICAgdHJ5IHtcclxuLy8gICAgLy8gY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyQ2xpZW50LmpvYnMuYXBwbHkoeyBqb2JJZCwgdXNlcklkIH0pO1xyXG4vLyAgICAgY29uc3QgcmVzdWx0ID0gYXdhaXQgc2VydmVyQ2xpZW50LmpvYnMuc3VibWl0KHsgam9iSWQsIHVzZXJJZCB9KTtcclxuXHJcbi8vICAgICByZXZhbGlkYXRlUGF0aCgnL2pvYnMnKTsgXHJcbiAgICBcclxuLy8gICAgIHJldHVybiB7IHN1Y2Nlc3M6IHRydWUsIGRhdGE6IHJlc3VsdCB9O1xyXG4vLyAgIH0gY2F0Y2ggKGVycm9yOiBhbnkpIHtcclxuLy8gICAgIHJldHVybiB7IHN1Y2Nlc3M6IGZhbHNlLCBlcnJvcjogZXJyb3IubWVzc2FnZSB9O1xyXG4vLyAgIH1cclxuLy8gfVxyXG5cclxuLy8gIEFjdGlvbiB0byBmZXRjaCBhcHBsaWVkIGpvYnMgZm9yIENsaWVudCBDb21wb25lbnRzXHJcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRBcHBsaWVkSm9ic0FjdGlvbih1c2VySWQ6IHN0cmluZywgc2VhcmNoPzogc3RyaW5nKSB7XHJcbiAgdHJ5IHtcclxuICAgIGNvbnN0IGpvYnMgPSBhd2FpdCBzZXJ2ZXJDbGllbnQuam9icy5nZXRBcHBsaWVkKHsgdXNlcklkLCBzZWFyY2ggfSk7XHJcbiAgICByZXR1cm4geyBzdWNjZXNzOiB0cnVlLCBkYXRhOiBqb2JzIH07XHJcbiAgfSBjYXRjaCAoZXJyb3I6IGFueSkge1xyXG4gICAgY29uc29sZS5lcnJvcihcIkFjdGlvbiBFcnJvcjpcIiwgZXJyb3IpO1xyXG4gICAgcmV0dXJuIHsgc3VjY2VzczogZmFsc2UsIGVycm9yOiBlcnJvci5tZXNzYWdlLCBkYXRhOiBbXSB9O1xyXG4gIH1cclxufVxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG5cclxuXHJcblxyXG4vLyAvLyBcIkh5YnJpZFwiIGFwcHJvYWNoOlxyXG4vLyAvLyBTZXJ2ZXIgQWN0aW9uIChUcmFuc3BvcnQpIC0+IGNhbGxzIHRSUEMgKExvZ2ljL1ZhbGlkYXRpb24pIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ1U0FvRnNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/components/JobsClientPage.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>JobsClientPage
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/Tab.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/components/JobList.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ee07d3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/app/actions/data:ee07d3 [app-client] (ecmascript) <text/javascript>");
;
var _s = __turbopack_context__.k.signature();
'use client';
;
;
;
;
;
// Inline Icons
const SearchIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "currentColor",
        viewBox: "0 0 16 16",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            d: "M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
        }, void 0, false, {
            fileName: "[project]/app/components/JobsClientPage.tsx",
            lineNumber: 12,
            columnNumber: 129
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/JobsClientPage.tsx",
        lineNumber: 12,
        columnNumber: 26
    }, ("TURBOPACK compile-time value", void 0));
_c = SearchIcon;
const CrossIcon = ()=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("svg", {
        xmlns: "http://www.w3.org/2000/svg",
        width: "24",
        height: "24",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("path", {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M6 18L18 6M6 6l12 12"
        }, void 0, false, {
            fileName: "[project]/app/components/JobsClientPage.tsx",
            lineNumber: 13,
            columnNumber: 158
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/components/JobsClientPage.tsx",
        lineNumber: 13,
        columnNumber: 25
    }, ("TURBOPACK compile-time value", void 0));
_c1 = CrossIcon;
function JobsClientPage({ initialLiveJobs, searchParams }) {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const [search, setSearch] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(searchParams.search);
    const [appliedJobs, setAppliedJobs] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])([]);
    const [isLoggedIn, setIsLoggedIn] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    // 1. Check Auth & Fetch Applied Jobs on Mount
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsClientPage.useEffect": ()=>{
            const loggedIn = localStorage.getItem("loggedin") === "true";
            setIsLoggedIn(loggedIn);
            const user = JSON.parse(localStorage.getItem("user") || "{}");
            if (loggedIn && user.id) {
                // // Fetch applied jobs client-side since we depend on localStorage
                // getAppliedJobs(user.id, searchParams.search)
                //   .then(jobs => setAppliedJobs(jobs))
                //   .catch(err => console.error("Failed to load applied jobs", err));
                // CHANGE: Call the Server Action
                (0, __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$actions$2f$data$3a$ee07d3__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["getAppliedJobsAction"])(user.id, searchParams.search).then({
                    "JobsClientPage.useEffect": (result)=>{
                        if (result.success) {
                            setAppliedJobs(result.data);
                        }
                    }
                }["JobsClientPage.useEffect"]).catch({
                    "JobsClientPage.useEffect": (err)=>console.error("Failed to load applied jobs", err)
                }["JobsClientPage.useEffect"]);
            }
        }
    }["JobsClientPage.useEffect"], [
        searchParams.search
    ]); // Re-fetch if search changes
    // 2. Debounce Search
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "JobsClientPage.useEffect": ()=>{
            const timer = setTimeout({
                "JobsClientPage.useEffect.timer": ()=>{
                    if (search !== searchParams.search) {
                        const params = new URLSearchParams();
                        if (search) params.set('search', search);
                        if (searchParams.tab) params.set('tab', searchParams.tab);
                        router.push(`?${params.toString()}`);
                    }
                }
            }["JobsClientPage.useEffect.timer"], 300);
            return ({
                "JobsClientPage.useEffect": ()=>clearTimeout(timer)
            })["JobsClientPage.useEffect"];
        }
    }["JobsClientPage.useEffect"], [
        search,
        searchParams,
        router
    ]);
    const handleClear = ()=>setSearch("");
    // 3. Determine what to show
    const currentTab = searchParams.tab;
    const jobsToShow = currentTab === 'applied' ? appliedJobs : initialLiveJobs;
    const storageKey = `jobList_${currentTab}_${searchParams.search || 'all'}`;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-4xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "sticky top-0 z-30   pt-6 px-4 pb-0 transition-all duration-300 ",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: (e)=>e.preventDefault(),
                        className: "flex items-center w-full bg-white border border-gray-300 mb-6 rounded-lg shadow-sm overflow-hidden    focus-within:border-black-500 focus-within:ring-1 focus-within:ring-black-500 transition-all",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                htmlFor: "search-jobs",
                                className: "p-3 text-gray-500",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(SearchIcon, {}, void 0, false, {
                                    fileName: "[project]/app/components/JobsClientPage.tsx",
                                    lineNumber: 82,
                                    columnNumber: 73
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobsClientPage.tsx",
                                lineNumber: 82,
                                columnNumber: 14
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                id: "search-jobs",
                                className: "flex-grow p-3 outline-none text-gray-800",
                                value: search,
                                placeholder: "Search by title, skill, or company...",
                                onChange: (e)=>setSearch(e.target.value)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobsClientPage.tsx",
                                lineNumber: 83,
                                columnNumber: 14
                            }, this),
                            search && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                type: "button",
                                onClick: handleClear,
                                className: "p-3 text-gray-500 hover:text-gray-900",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(CrossIcon, {}, void 0, false, {
                                    fileName: "[project]/app/components/JobsClientPage.tsx",
                                    lineNumber: 92,
                                    columnNumber: 18
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/app/components/JobsClientPage.tsx",
                                lineNumber: 91,
                                columnNumber: 16
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/components/JobsClientPage.tsx",
                        lineNumber: 80,
                        columnNumber: 11
                    }, this),
                    isLoggedIn && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$Tab$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                        liveCount: initialLiveJobs.length,
                        appliedCount: appliedJobs.length
                    }, void 0, false, {
                        fileName: "[project]/app/components/JobsClientPage.tsx",
                        lineNumber: 98,
                        columnNumber: 13
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/components/JobsClientPage.tsx",
                lineNumber: 79,
                columnNumber: 8
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-4 pt-4",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$components$2f$JobList$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                    storageKey: storageKey,
                    jobs: jobsToShow,
                    searchTerm: searchParams.search,
                    currentTab: currentTab,
                    onClear: handleClear
                }, storageKey, false, {
                    fileName: "[project]/app/components/JobsClientPage.tsx",
                    lineNumber: 106,
                    columnNumber: 11
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/components/JobsClientPage.tsx",
                lineNumber: 105,
                columnNumber: 8
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/components/JobsClientPage.tsx",
        lineNumber: 78,
        columnNumber: 5
    }, this);
}
_s(JobsClientPage, "Jg/ql14dDuRNdPiK54vqiuYLGZo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c2 = JobsClientPage;
var _c, _c1, _c2;
__turbopack_context__.k.register(_c, "SearchIcon");
__turbopack_context__.k.register(_c1, "CrossIcon");
__turbopack_context__.k.register(_c2, "JobsClientPage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=app_28d2ff82._.js.map