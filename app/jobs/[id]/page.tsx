///Job detail page here

import React from "react";
import Link from "next/link";
import { getJob } from '../../lib/api'
import ApplySection from "../../components/ApplySection";
import { serverClient } from "../../server";



// --- INLINE ICONS ---
// We define these here so this Server Component renders static HTML with icons immediately.
const Icons = {
    ArrowLeft: ({ size = 20 }) => <svg width={size} height={size} fill="currentColor" viewBox="0 0 24 24"><path d="M7.828 11H20v2H7.828l5.364 5.364-1.414 1.414L4 12l7.778-7.778 1.414 1.414z"/></svg>,
    Building: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M19 2H5c-1.103 0-2 .897-2 2v16h2v-2h2v2h2v-2h6v2h2v-2h2v2h2V4c0-1.103-.897-2-2-2zM9 12H7v-2h2v2zm0-4H7V6h2v2zm4 4h-2v-2h2v2zm0-4h-2V6h2v2zm4 4h-2v-2h2v2zm0-4h-2V6h2v2z"/></svg>,
    Location: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"/><path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"/></svg>,
    LocationFill: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C7.589 2 4 5.589 4 9.995 3.971 16.44 11.696 21.784 12 22c0 0 8.113-5.5 8-11.9C20 5.589 16.411 2 12 2zm0 12c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4z"/></svg>,
    Share: ({ size = 18 }) => <svg width={size} height={size} fill="currentColor" viewBox="0 0 512 512"><path d="M336 192h40a40 40 0 0140 40v192a40 40 0 01-40 40H136a40 40 0 01-40-40V232a40 40 0 0140-40h40M336 128l-80-80-80 80M256 321V48" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="32"/></svg>,
    HandUsd: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 24 24"><path d="M20 20h-4v-4h4v4zm-6-10h-4v4h4v-4zm6 0h-4v4h4v-4zm-12 6h-4v4h4v-4zm6 0h-4v4h4v-4zm-6-6h-4v4h4v-4z"/><path d="M2 22h20V2z"/></svg>,
    Analytics: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M456 112h-48a24 24 0 00-24 24v264h-16v-56a24 24 0 00-24-24h-48a24 24 0 00-24 24v56h-16v-136a24 24 0 00-24-24h-48a24 24 0 00-24 24v136h-16v-200a24 24 0 00-24-24h-48a24 24 0 00-24 24v200H32V64a16 16 0 0116-16h416a16 16 0 0116 16v48a24 24 0 00-24 24z"/><path d="M480 432H32a16 16 0 00-16 16v32a16 16 0 0016 16h448a16 16 0 0016-16v-32a16 16 0 00-16-16z"/></svg>,
    Suitcase: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"></rect><path d="M16 21V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v16"></path></svg>,
    People: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 512 512"><path d="M402 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-2.72-38.4 26.31-64 66-64s68.76 25.56 66 64zM336 256c-83 0-136 41.76-146 96v48h292v-48c-10-54.24-63-96-146-96zM176 168c-2.93 40.67-33.1 72-66 72s-63.12-31.32-66-72c-2.72-38.4 26.31-64 66-64s68.76 25.56 66 64zM110 256c-79.3 0-130.6 38.4-142 88v56h124v-56c6.4-37.8 38-65.4 78-81a164.06 164.06 0 01-60-7z"/></svg>,
    Clock: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg>,
    Calendar: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="currentColor" viewBox="0 0 16 16"><path d="M3.5 0a.5.5 0 0 1 .5.5V1h8V.5a.5.5 0 0 1 1 0V1h1a2 2 0 0 1 2 2v11a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V3a2 2 0 0 1 2-2h1V.5a.5.5 0 0 1 .5-.5zM1 4v10a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V4H1z"/></svg>,
    LightBulb: ({ className = "", size = 18 }) => <svg width={size} height={size} className={className} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"/></svg>
};

// Helper components
const DetailItem = ({ icon: Icon, text }: { icon: any, text: string | number }) => (
    <div className="flex items-center gap-3 text-gray-600">
        <Icon className="text-gray-400" size={18} />
        <span className="font-medium text-sm sm:text-base">{text}</span>
    </div>
);

function formatPostedDate(dateString: string) {
    const date = new Date(dateString);
    const now = new Date();
    const diffTime = Math.abs(now.getTime() - date.getTime());
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    
    if (diffDays === 1) return "Posted 1 day ago";
    if (diffDays <= 30) return `Posted ${diffDays} days ago`;
    const diffMonths = Math.floor(diffDays / 30);
    if (diffMonths === 1) return "Posted 1 month ago";
    return `Posted ${diffMonths} months ago`;
}

// --- SERVER COMPONENT ---
// In Next.js 15, params is a Promise. We await it.
export default async function JobDetailPage({ params }: { params: Promise<{ id: string }> }) {
    
    const { id } = await params;
    // const job = await getJob(id);

    // if (!job) {
    //     return <div className="p-10 text-center">Job not found</div>;
    // }
    let job
    try {
        job = await serverClient.jobs.byId({ id });
    } catch (e) {
        return <div className="p-10 text-center">Job not found</div>;
    }
    return (
        <div className="bg-white min-h-screen py-10 px-4 font-sans text-gray-600">
            <div className="max-w-5xl mx-auto">
                
                {/* --- Back Link --- */}
                <Link 
                    href="/jobs" 
                    className="flex items-center gap-1 text-sm text-gray-500 hover:text-orange-600 transition-colors mb-8"
                >
                    <Icons.ArrowLeft size={20} />
                    Back to job board
                </Link>

                {/* --- Main Content Container --- */}
                <div className="border border-gray-200 rounded-xl p-6 sm:p-10 bg-white shadow-sm">
                    
                    {/* --- Header --- */}
                    <div className="flex flex-col sm:flex-row justify-between sm:items-start mb-8 border-b border-gray-100 pb-8">
                        <div>
                            <h1 className="text-3xl font-bold text-gray-900 mb-3">{job.title}</h1>
                            
                            <div className="flex flex-wrap items-center gap-3">
                                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-gray-100 text-gray-700 text-xs font-semibold tracking-wide uppercase">
                                    <Icons.Building className="text-gray-400" />
                                    {job.company}
                                </div>
                                <div className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-50 text-orange-700 text-xs font-semibold tracking-wide uppercase border border-orange-100">
                                    <Icons.Location />
                                    {job.workMode}
                                </div>
                            </div>
                        </div>

                        <div className="mt-4 sm:mt-0 flex items-center gap-3">
                            <button className="flex items-center gap-2 px-4 py-2 rounded-lg border border-gray-200 text-gray-600 hover:bg-gray-50 hover:text-gray-900 transition-all text-sm font-medium">
                                <Icons.Share size={16} />
                                Share
                            </button>
                        </div>
                    </div>

                    {/* --- Details Grid --- */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-10">
                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Role Details</h4>
                            <DetailItem icon={Icons.HandUsd} text={job.stage} />
                            <DetailItem icon={Icons.Analytics} text={job.industry} />
                            <DetailItem icon={Icons.LocationFill} text={job.location} />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Employment</h4>
                            <DetailItem icon={Icons.Suitcase} text={job.employmentType} />
                            <DetailItem icon={Icons.Clock} text={`Exp: ${job.experience}`} />
                            <DetailItem icon={Icons.Calendar} text={formatPostedDate(job.postedDate)} />
                        </div>

                        <div className="space-y-4">
                            <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-2">Activity</h4>
                            <DetailItem icon={Icons.People} text={`${job.applicationCount} applications`} />
                            <div className="flex items-center gap-2 mt-2">
                                <span className="relative flex h-3 w-3">
                                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                                  <span className="relative inline-flex rounded-full h-3 w-3 bg-green-500"></span>
                                </span>
                                <span className="text-sm text-green-600 font-medium">Post Status: Active</span>
                            </div>
                        </div>
                    </div>

                    {/* --- Skills --- */}
                    <div className="mb-10 bg-gray-50 rounded-lg p-6 border border-gray-100">
                        <h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2 uppercase tracking-wide">
                            <Icons.LightBulb className="text-orange-500" size={18} />
                            Required Skills
                        </h3>
                        <div className="flex flex-wrap gap-2">
                            {job.skills.map((skill: any) => (
                                <span key={skill} className="px-3 py-1 bg-white border border-gray-200 rounded-md text-sm text-gray-700 font-medium shadow-sm">
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>

                    {/* --- Description --- */}
                    <div className="prose prose-gray max-w-none">
                        <h3 className="text-xl font-bold text-gray-900 mb-4">About the job</h3>
                        <p className="text-gray-600 leading-relaxed mb-6">{job.description}</p>
                        
                        <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">What you will do</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2 marker:text-orange-500">
                            <li>Review and analyze system specifications.</li>
                            <li>Collaborate with QA Engineers...</li>
                            <li>Execute test cases...</li>
                        </ul>

                        <h3 className="text-lg font-bold text-gray-900 mt-8 mb-4">What are we looking for?</h3>
                        <ul className="list-disc pl-5 text-gray-600 space-y-2 marker:text-orange-500">
                            {job.requirements.map((req: any, i: any) => (
                                <li key={i}>{req}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                {/* --- CLIENT COMPONENT: APPLY BUTTON --- */}
                <ApplySection jobId={job.id} />

            </div>
        </div>
    );
}