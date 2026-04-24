'use client';

import React, { useState, useEffect, useRef, useLayoutEffect } from 'react';
import { Job } from '../types/types';
import Card from './JobCard';

export default function JobList({ jobs, searchTerm, currentTab, onClear, storageKey }: { jobs: Job[], searchTerm: string, currentTab: string, onClear: () => void, storageKey: string }) {
    
    // Initialize from session storage
    // const [visibleCount, setVisibleCount] = useState(() => {
    //     if (typeof window !== 'undefined') {
    //         const savedCount = sessionStorage.getItem(`${storageKey}_count`);
    //         return savedCount ? parseInt(savedCount, 10) : 10;
    //     }
    //     return 10;
    // })
     const [visibleCount, setVisibleCount] = useState(10);

    const loadMoreRef = useRef<HTMLDivElement>(null); 

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

    useEffect(() => {
        const observer = new IntersectionObserver((entries) => {
            const target = entries[0];
            if (target.isIntersecting && visibleCount < jobs.length) {
                setTimeout(() => {
                     setVisibleCount(prev => prev + 10);
                }, 500);
            }
        }, { root: null, rootMargin: "100px", threshold: 0.1 });

        const currentRef = loadMoreRef.current;
        if (currentRef) observer.observe(currentRef);
        return () => { if (currentRef) observer.unobserve(currentRef); };
    }, [visibleCount, jobs.length]);

    if (jobs.length === 0) {
        return (
            <div className="text-center p-10">
                <h2 className="text-2xl font-semibold mb-4 text-gray-700">
                    {searchTerm 
                       ? `No ${currentTab === 'applied' ? 'applied' : ''} jobs found for "${searchTerm}".`
                       : `No ${currentTab === 'applied' ? 'applied' : ''} jobs found.`
                    }
                </h2>
                <button onClick={onClear} className="bg-red-500 text-white font-bold py-2 px-6 rounded-lg hover:bg-red-600">
                    Clear Search
                </button>
            </div>
        )
    }

    const visibleJobs = jobs.slice(0, visibleCount);
    const hasMore = visibleCount < jobs.length;

    return (
        <>
            <h2 className="text-center text-lg font-medium mb-4 text-gray-600">
                Found {jobs.length} {jobs.length === 1 ? 'job' : 'jobs'}.
            </h2>
            
            <div className="flex flex-col gap-4 mt-2"> 
                {visibleJobs.map(job => <Card key={job.id} jobData={job} />)}
            </div>

            {hasMore && (
                <div ref={loadMoreRef} className="h-24 flex items-center justify-center p-4 opacity-50">
                    <div className="w-8 h-8 border-4 border-red-500 border-t-transparent rounded-full animate-spin"></div>
                </div>
            )}
        </>
    )
}