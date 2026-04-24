(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/app/homeSections/LogoItem.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
const companyLogos = [
    {
        id: 1,
        grayscaleSrc: '/logos/microsoft_gray.png',
        colorSrc: '/logos/microsoft_color.png',
        alt: 'Microsoft Logo'
    },
    {
        id: 2,
        grayscaleSrc: '/logos/neo4j_gray.png',
        colorSrc: '/logos/neo4j_color.png',
        alt: 'Neo4j Logo'
    },
    {
        id: 3,
        grayscaleSrc: '/logos/okta_gray.png',
        colorSrc: '/logos/okta_gray.png',
        alt: 'Okta Logo'
    }
];
const BackedByLeadersSection = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("section", {
        className: "bg-white py-16 px-4 sm:px-6 lg:px-8",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "container mx-auto max-w-5xl text-center",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                    className: "text-3xl md:text-4xl font-bold text-slate-900 mb-4",
                    children: "Backed by Industry Leaders"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/LogoItem.tsx",
                    lineNumber: 39,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                    className: "text-lg text-gray-600 mb-12",
                    children: "Trusted and supported by leading technology leaders"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/LogoItem.tsx",
                    lineNumber: 42,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0)),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-wrap justify-center items-center gap-x-12 gap-y-8",
                    children: companyLogos.map((logo)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(LogoImage, {
                            ...logo
                        }, logo.id, false, {
                            fileName: "[project]/app/homeSections/LogoItem.tsx",
                            lineNumber: 49,
                            columnNumber: 13
                        }, ("TURBOPACK compile-time value", void 0)))
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/LogoItem.tsx",
                    lineNumber: 47,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            ]
        }, void 0, true, {
            fileName: "[project]/app/homeSections/LogoItem.tsx",
            lineNumber: 36,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/homeSections/LogoItem.tsx",
        lineNumber: 35,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = BackedByLeadersSection;
// Helper component for each logo to manage its hover state
const LogoImage = ({ grayscaleSrc, colorSrc, alt })=>{
    _s();
    const [isHovered, setIsHovered] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        onMouseEnter: ()=>setIsHovered(true),
        onMouseLeave: ()=>setIsHovered(false),
        className: "max-w-[150px] transition-transform duration-300 ease-in-out hover:scale-105",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
            src: isHovered ? colorSrc : grayscaleSrc,
            alt: alt,
            className: "h-10 sm:h-12 object-contain"
        }, void 0, false, {
            fileName: "[project]/app/homeSections/LogoItem.tsx",
            lineNumber: 68,
            columnNumber: 7
        }, ("TURBOPACK compile-time value", void 0))
    }, void 0, false, {
        fileName: "[project]/app/homeSections/LogoItem.tsx",
        lineNumber: 63,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_s(LogoImage, "FPQn8a98tPjpohC7NUYORQR8GJE=");
_c1 = LogoImage;
const __TURBOPACK__default__export__ = BackedByLeadersSection;
var _c, _c1;
__turbopack_context__.k.register(_c, "BackedByLeadersSection");
__turbopack_context__.k.register(_c1, "LogoImage");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/app/homeSections/RadarSection.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>__TURBOPACK__default__export__
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/framer-motion/dist/es/render/components/motion/proxy.mjs [app-client] (ecmascript)");
"use client";
;
;
const RadarSection = ()=>{
    // Variants for the container to orchestrate the popping avatars
    // "staggerChildren" handles the delay between each child automatically
    const containerVariants = {
        hidden: {
            opacity: 0
        },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.3,
                delayChildren: 0.2
            }
        }
    };
    // Variants for the individual avatars (pop up effect)
    const avatarVariants = {
        hidden: {
            scale: 0,
            opacity: 0
        },
        visible: {
            scale: 1,
            opacity: 1,
            transition: {
                type: "spring",
                stiffness: 260,
                damping: 20
            }
        }
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
        className: "shrink-0 relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center",
        initial: "hidden",
        whileInView: "visible",
        viewport: {
            once: true,
            amount: 0.3
        },
        variants: containerVariants,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-full h-full border border-dashed border-gray-300 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 44,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[70%] h-[70%] border border-dashed border-gray-300 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 45,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute w-[40%] h-[40%] border border-dashed border-gray-300 rounded-full"
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute inset-0 rounded-full z-0",
                style: {
                    willChange: "transform"
                },
                animate: {
                    rotate: 360
                },
                transition: {
                    duration: 4,
                    repeat: Infinity,
                    ease: "linear"
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute inset-0 rounded-full bg-[conic-gradient(transparent_270deg,rgba(251,146,60,0.2)_360deg)]"
                    }, void 0, false, {
                        fileName: "[project]/app/homeSections/RadarSection.tsx",
                        lineNumber: 59,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0)),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-t from-orange-400/50 to-orange-400 origin-bottom -translate-x-1/2"
                    }, void 0, false, {
                        fileName: "[project]/app/homeSections/RadarSection.tsx",
                        lineNumber: 61,
                        columnNumber: 9
                    }, ("TURBOPACK compile-time value", void 0))
                ]
            }, void 0, true, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 52,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200",
                variants: avatarVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200",
                    alt: "Central Candidate",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/RadarSection.tsx",
                    lineNumber: 69,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 65,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-[10%] left-[15%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-200 shadow-lg overflow-hidden bg-gray-200",
                variants: avatarVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150",
                    alt: "Candidate",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/RadarSection.tsx",
                    lineNumber: 85,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 81,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute top-[20%] right-[10%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200",
                variants: avatarVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150",
                    alt: "Candidate",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/RadarSection.tsx",
                    lineNumber: 93,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 89,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-[20%] left-[10%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200",
                variants: avatarVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150",
                    alt: "Candidate",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/RadarSection.tsx",
                    lineNumber: 101,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 97,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0)),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$framer$2d$motion$2f$dist$2f$es$2f$render$2f$components$2f$motion$2f$proxy$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["motion"].div, {
                className: "absolute bottom-[10%] right-[20%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200",
                variants: avatarVariants,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("img", {
                    src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150",
                    alt: "Candidate",
                    className: "w-full h-full object-cover"
                }, void 0, false, {
                    fileName: "[project]/app/homeSections/RadarSection.tsx",
                    lineNumber: 109,
                    columnNumber: 9
                }, ("TURBOPACK compile-time value", void 0))
            }, void 0, false, {
                fileName: "[project]/app/homeSections/RadarSection.tsx",
                lineNumber: 105,
                columnNumber: 7
            }, ("TURBOPACK compile-time value", void 0))
        ]
    }, void 0, true, {
        fileName: "[project]/app/homeSections/RadarSection.tsx",
        lineNumber: 34,
        columnNumber: 5
    }, ("TURBOPACK compile-time value", void 0));
};
_c = RadarSection;
const __TURBOPACK__default__export__ = RadarSection;
var _c;
__turbopack_context__.k.register(_c, "RadarSection");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
 // "use client"
 // import React, { useEffect, useRef, useState } from 'react';
 // const RadarSection = () => {
 //   const [isVisible, setIsVisible] = useState(false);
 //   const sectionRef = useRef(null);
 //   useEffect(() => {
 //     const observer = new IntersectionObserver(
 //       ([entry]) => {
 //         if (entry.isIntersecting) {
 //           setIsVisible(true);
 //         }
 //       },
 //       { threshold: 0.3 } // Trigger when 30% of the element is visible
 //     );
 //     if (sectionRef.current) {
 //       observer.observe(sectionRef.current);
 //     }
 //     return () => {
 //       if (sectionRef.current) {
 //         observer.unobserve(sectionRef.current);
 //       }
 //     };
 //   }, []);
 //   return (
 //     // <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"></div>
 //       <div 
 //         ref={sectionRef} 
 //         className="shrink-0 relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center"
 //       >
 //         {/* 1. Static Dashed Circles */}
 //         <div className="absolute w-full h-full border border-dashed border-gray-300 rounded-full" />
 //         <div className="absolute w-[70%] h-[70%] border border-dashed border-gray-300 rounded-full" />
 //         <div className="absolute w-[40%] h-[40%] border border-dashed border-gray-300 rounded-full" />
 //         {/* 2. Rotating Radar Scanner 
 //             - spins indefinitely
 //             - contains the gradient sweep and the leading line 
 //         */}
 //         <div className="absolute inset-0 rounded-full animate-[spin_4s_linear_infinite] z-0">
 //             {/* The Gradient Sweep (Trail) */}
 //             <div className="absolute inset-0 rounded-full bg-[conic-gradient(transparent_270deg,rgba(251,146,60,0.2)_360deg)]" />
 //             {/* The Leading Line (Sharp Orange Line) */}
 //             <div className="absolute top-0 left-1/2 w-[2px] h-1/2 bg-gradient-to-t from-orange-400/50 to-orange-400 origin-bottom -translate-x-1/2" />
 //         </div>
 //         {/* 3. Center Avatar (Always visible or pop first) */}
 //         <div className={`absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200 transition-all duration-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}>
 //            <img 
 //              src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200" 
 //              alt="Central Candidate" 
 //              className="w-full h-full object-cover"
 //            />
 //         </div>
 //         {/* 4. Popping Avatars with Staggered Delays 
 //             Using 'delay' via inline styles or tailwind classes
 //         */}
 //         {/* Top Left - Delay 300ms */}
 //         <div 
 //             className={`absolute top-[10%] left-[15%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-200 shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-300 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
 //         >
 //            <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
 //         </div>
 //         {/* Top Right - Delay 700ms */}
 //         <div 
 //             className={`absolute top-[20%] right-[10%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-700 ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
 //         >
 //            <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
 //         </div>
 //         {/* Bottom Left - Delay 1100ms */}
 //         <div 
 //             className={`absolute bottom-[20%] left-[10%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-[1100ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
 //         >
 //            <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
 //         </div>
 //         {/* Bottom Right - Delay 1500ms */}
 //         <div 
 //             className={`absolute bottom-[10%] right-[20%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200 transition-all duration-500 ease-out delay-[1500ms] ${isVisible ? 'scale-100 opacity-100' : 'scale-0 opacity-0'}`}
 //         >
 //            <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
 //         </div>
 //       </div>
 //   );
 // };
 // export default RadarSection;
}),
]);

//# sourceMappingURL=app_homeSections_468910ef._.js.map