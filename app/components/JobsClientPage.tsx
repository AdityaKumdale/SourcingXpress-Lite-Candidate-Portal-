'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getAppliedJobs } from '../lib/api';
import Tabs from './Tab';
import JobList from './JobList';
import { Job } from '../types/types';
import { getAppliedJobsAction } from '../actions/jobActions';

// Inline Icons
const SearchIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>;
const CrossIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>;

export default function JobsClientPage({ 
  initialLiveJobs, 
  searchParams 
}: { 
  initialLiveJobs: Job[], 
  searchParams: { search: string, tab: string } 
}) {
  const router = useRouter();
  const [search, setSearch] = useState(searchParams.search);
  const [appliedJobs, setAppliedJobs] = useState<Job[]>([]);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  // Sync authentication and fetch user's applied jobs
  useEffect(() => {
    const loggedIn = localStorage.getItem("loggedin") === "true";
    setIsLoggedIn(loggedIn);
    
    const user = JSON.parse(localStorage.getItem("user") || "{}");
    
    if (loggedIn && user.id) {
      // // Fetch applied jobs client-side since we depend on localStorage
      // getAppliedJobs(user.id, searchParams.search)
      //   .then(jobs => setAppliedJobs(jobs))
      //   .catch(err => console.error("Failed to load applied jobs", err));


      // CHANGE: Call the Server Action
      getAppliedJobsAction(user.id, searchParams.search)
        .then(result => {
             if(result.success) {
                 setAppliedJobs(result.data);
             }
        })
        .catch(err => console.error("Failed to load applied jobs", err));
        



    }
  }, [searchParams.search]); // Re-fetch if search changes

  // Sync search query with URL params via debouncing
  useEffect(() => {
    const timer = setTimeout(() => {
      if (search !== searchParams.search) {
        const params = new URLSearchParams();
        if (search) params.set('search', search);
        if (searchParams.tab) params.set('tab', searchParams.tab);
        
        router.push(`?${params.toString()}`);
      }
    }, 300);
    return () => clearTimeout(timer);
  }, [search, searchParams, router]);

  const handleClear = () => setSearch("");

  // Select jobs based on the active tab
  const currentTab = searchParams.tab;
  const jobsToShow = currentTab === 'applied' ? appliedJobs : initialLiveJobs;
  const storageKey = `jobList_${currentTab}_${searchParams.search || 'all'}`;

  return (
    <div className="max-w-4xl mx-auto">
       <div className="sticky top-0 z-30   pt-6 px-4 pb-0 transition-all duration-300 ">
          <form onSubmit={(e) => e.preventDefault()} className="flex items-center w-full bg-white border border-gray-300 mb-6 rounded-lg shadow-sm overflow-hidden 
                    focus-within:border-black-500 focus-within:ring-1 focus-within:ring-black-500 transition-all">
             <label htmlFor="search-jobs" className="p-3 text-gray-500"><SearchIcon/></label>
             <input 
               id="search-jobs"
               className="flex-grow p-3 outline-none text-gray-800"
               value={search}
               placeholder="Search by title, skill, or company..."
               onChange={(e) => setSearch(e.target.value)}
             />
             {search && (
               <button type="button" onClick={handleClear} className="p-3 text-gray-500 hover:text-gray-900">
                 <CrossIcon/>
               </button>
             )}
          </form>

          {isLoggedIn && (
            <Tabs 
              liveCount={initialLiveJobs.length} 
              appliedCount={appliedJobs.length} 
            />
          )}
       </div>

       <div className="p-4 pt-4">
          <JobList 
             key={storageKey}
             storageKey={storageKey}
             jobs={jobsToShow} 
             searchTerm={searchParams.search} 
             currentTab={currentTab} 
             onClear={handleClear} 
          />
       </div>
    </div>
  );
}