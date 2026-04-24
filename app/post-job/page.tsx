'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { HiOutlineSparkles } from 'react-icons/hi';
import { FaArrowLeft } from 'react-icons/fa';

export default function PostJobPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl w-full text-center"
      >
        <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-orange-100 text-orange-600 mb-8">
          <HiOutlineSparkles size={40} />
        </div>
        
        <h1 className="text-4xl md:text-5xl font-black text-slate-900 mb-6 tracking-tight">
          Recruiter Portal <span className="text-orange-600">Coming Soon</span>
        </h1>
        
        <p className="text-lg text-slate-600 mb-10 leading-relaxed">
          We are currently polishing the SourcingXpress recruiter experience. 
          The full-stack job posting and candidate management dashboard will be available in the next version.
        </p>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link 
            href="/" 
            className="flex items-center gap-2 bg-slate-900 text-white px-8 py-3 rounded-lg font-bold hover:bg-slate-800 transition-all shadow-lg"
          >
            <FaArrowLeft size={14} />
            Back to Home
          </Link>
          
          <Link 
            href="/jobs" 
            className="flex items-center gap-2 bg-orange-600 text-white px-8 py-3 rounded-lg font-bold hover:bg-orange-700 transition-all shadow-lg shadow-orange-100"
          >
            Explore Jobs
          </Link>
        </div>
        
        <div className="mt-16 p-6 border border-dashed border-gray-200 rounded-2xl bg-gray-50/50">
          <p className="text-sm text-slate-500 italic">
            "SourcingXpress: Re-engineered for high-performance recruitment workflows."
          </p>
        </div>
      </motion.div>
    </div>
  );
}
