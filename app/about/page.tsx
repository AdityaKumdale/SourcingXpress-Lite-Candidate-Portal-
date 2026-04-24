'use client';

import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaArrowLeft, FaInfoCircle } from 'react-icons/fa';

export default function AboutPage() {
  return (
    <div className="min-h-[80vh] flex items-center justify-center bg-white px-4">
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="max-w-3xl w-full"
      >
        <div className="text-center mb-12">
          <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-100 text-slate-900 mb-6">
            <FaInfoCircle size={32} />
          </div>
          <h1 className="text-4xl font-black text-slate-900 tracking-tight mb-4">
            About <span className="text-red-600 italic">SourcingXpress</span>
          </h1>
          <div className="w-20 h-1.5 bg-orange-500 mx-auto rounded-full"></div>
        </div>

        <div className="bg-gray-50 border border-gray-100 rounded-3xl p-8 md:p-12 shadow-sm">
          <div className="prose prose-slate max-w-none">
            <p className="text-lg text-slate-700 leading-relaxed mb-6">
              SourcingXpress is a modern recruitment platform designed to bridge the gap between top tech talent and innovative companies. 
              Our mission is to simplify the hiring journey through advanced automation, type-safe data handling, and an intuitive user experience.
            </p>
            
            <h3 className="text-xl font-bold text-slate-900 mb-4 uppercase tracking-wider text-sm">The Technology</h3>
            <p className="text-slate-600 mb-8">
              This platform is a re-engineered demonstration of the original SourcingXpress candidate portal, built using the latest 
              Next.js 15 App Router architecture, tRPC for end-to-end type safety, and Framer Motion for high-performance animations.
            </p>
            
            <div className="flex justify-center pt-4">
              <Link 
                href="/" 
                className="flex items-center gap-2 text-slate-900 font-bold border-b-2 border-orange-500 pb-1 hover:text-orange-600 hover:border-orange-600 transition-all"
              >
                <FaArrowLeft size={12} />
                Explore the Platform
              </Link>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
