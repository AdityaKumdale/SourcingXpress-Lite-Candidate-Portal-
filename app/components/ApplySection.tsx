'use client';

import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { applyToJob } from '../lib/api';
import { applyToJobAction } from '../actions/jobActions';
import { trpc } from '../lib/trpc-client';

// Inline Icons for stability
const Icons = {
    CheckCircle: ({ size = 20 }) => <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>,
    CloseCircle: ({ size = 20 }) => <svg width={size} height={size} fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z"/></svg>
};

export default function ApplySection({ jobId }: { jobId: string }) {
    const mutation = trpc.jobs.submit.useMutation({
        onSuccess: () => {
            alert("Applied successfully!");
            // You can also tell it to refresh other data here
        },
        onError: (error) => {
            alert(error.message);
        }
    });

    function handleApplyForClient() {
       const user = JSON.parse(localStorage.getItem("user") || "{}");
       
   
       mutation.mutate({ 
           jobId: jobId, 
           userId: user.id 
       });
    }

    // return (
    //     <button 
    //         onClick={handleApply} 
    //         disabled={mutation.isLoading} 
    //     >
    //         {mutation.isLoading ? "Applying..." : "Apply Now"}
    //     </button>
    // );
    const router = useRouter();
    const [status, setStatus] = useState<'idle' | 'submitting' | 'success' | 'error'>('idle');
    const [message, setMessage] = useState('');

    async function handleApply(e: React.FormEvent) {
        e.preventDefault();
        
        // Auth Check (Client Side)
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

        // submit Application
        setStatus('submitting');
        try {
            // await applyToJob(jobId, user.id);
            await applyToJobAction(jobId, user.id);
            setStatus('success');
            setMessage("Successfully applied!");
        } catch (err: any) {
            setStatus('error');
            setMessage(err.message || "Failed to apply");
        }
    }

    const isApplying = status === 'submitting';
    const isSuccess = status === 'success';

    // Status Badge Appearance
    const statusColor = isSuccess 
        ? 'text-green-600 bg-green-50 border-green-200' 
        : 'text-red-600 bg-red-50 border-red-200';
    
    const StatusIcon = isSuccess ? Icons.CheckCircle : Icons.CloseCircle;

    return (
        <div className="mt-8">
            <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <form onSubmit={handleApply}>
                    <button 
                        disabled={isApplying || isSuccess}
                        className="bg-orange-600 text-white font-bold py-3 px-10 rounded-lg text-lg hover:bg-orange-700 transition-all shadow-lg shadow-orange-200 transform hover:-translate-y-0.5 disabled:opacity-50 disabled:cursor-not-allowed disabled:shadow-none"
                    >
                        {isApplying ? "Applying..." : (isSuccess ? "Applied Successfully" : "Apply Now →")}
                    </button>
                </form>
                
                {(status === 'success' || status === 'error') && (
                    <div className={`flex items-center gap-2 px-4 py-2 rounded-lg border ${statusColor}`}>
                        <StatusIcon size={20} />
                        <span className="font-medium">{message}</span>
                    </div>
                )}
            </div>
            <p className="text-xs text-gray-400 mt-4">
                NOTE: Team leads/Architects who are ready to work on Hardcore Coding are also invited.
            </p>
        </div>
    );
}