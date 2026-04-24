'use client'

import React, { useLayoutEffect } from 'react';
import Link from 'next/link';
import type { Job } from '../types/types';
import { useRef } from 'react';
import { useSearchParams } from 'next/navigation';

// interface TabsProps {
//     liveJobsPromise: Promise<Job[]>;
//     appliedJobsPromise: Promise<Job[]>;
// }
interface TabsProps {
    liveCount: number;
    appliedCount: number;
}

export default function Tabs( { liveCount, appliedCount }: TabsProps) {
  const searchParams = useSearchParams() 
  

  const currentTab = searchParams.get('tab') || 'live';
  const searchTerm = searchParams.get('search') || '';

  const getTabUrl = (targetTab: string) => {
    const params = new URLSearchParams();
    if (searchTerm) params.set('search', searchTerm);
    params.set('tab', targetTab);
    return `?${params.toString()}`;
  };

  useLayoutEffect(() => {
       
    

        if(currentTab === 'live'){
           const savedPositionLive = sessionStorage.getItem("liveJobListScrollY")

           if(savedPositionLive){
             window.scrollTo(0, parseInt(savedPositionLive))
           }else{
            window.scrollTo(0, 0);
           }

           return () => {
             sessionStorage.setItem("liveJobListScrollY", window.scrollY.toString())
           }
        }

        
        if(currentTab === 'applied'){
             const savedPositionLive = sessionStorage.getItem("appliedJobListScrollY")

           if(savedPositionLive){
             window.scrollTo(0, parseInt(savedPositionLive))
           }else{
            window.scrollTo(0, 0);
           }

           return () => {
             sessionStorage.setItem("appliedJobListScrollY", window.scrollY.toString())
           }
        }

     
    }, [currentTab]);

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

  return (
    <div className={containerStyle}>
      <Link
        href={getTabUrl('live')}
        onClick={(e) => { if (currentTab === 'live') e.preventDefault(); }}
        //onClick={(e) => handleTabClick(e, 'live')} //small error : Parameter 'e' implicitly has an 'any' type.
        className={`${tabBaseStyle} ${currentTab === 'live' ? activeStyle : inactiveStyle}`}
         scroll={false}
      >
        Live Jobs
        <span className="ml-1 opacity-80">
            {/* <React.Suspense fallback="(...)">
                <Await resolve={liveJobsPromise} errorElement="(0)"> //error : Cannot find name 'Await'.
                    {(jobs:any):any => `(${jobs.length})`}
                </Await>
            </React.Suspense> */}

            ({liveCount})
        </span>
      </Link>

      <Link
        href={getTabUrl('applied')}
         onClick={(e) => { if (currentTab === 'applied') e.preventDefault(); }}
       // onClick={(e) => handleTabClick(e, 'applied')}  //small error : Parameter 'e' implicitly has an 'any' type.
        className={`${tabBaseStyle} ${currentTab === 'applied' ? activeStyle : inactiveStyle}`}
         scroll={false}
      >
        Applied Jobs
        <span className="ml-1 opacity-80">
            {/* <React.Suspense fallback="(...)">
                <Await resolve={appliedJobsPromise} errorElement="(0)">      //error : Cannot find name 'Await'.
                    {(jobs:any):any => `(${jobs.length})`}
                </Await>
            </React.Suspense> */}

            ({appliedCount})
        </span>
      </Link>
    </div>
  );
}




