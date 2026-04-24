
import React from 'react';
import Link from 'next/link';

// --- IMPORTS FOR YOUR SECTIONS ---
// Based on your folder structure image, these should be in src/app/homeSections/
import BackedByLeadersSection from "./homeSections/LogoItem";
import PlatformInAction from "./homeSections/PlatformInAction";
import TeamSection from "./homeSections/TeamSection";
import CTASection from "./homeSections/CTASection";
import TestimonialsSection from "./homeSections/TestimonialsSection";
import RadarSection from './homeSections/RadarSection';

// --- INLINE ICONS (Zero Dependencies for stability) ---
const Icons = {
  Users: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" /></svg>
  ),
  UserSearch: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7" /></svg>
  ),
  Building: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" /></svg>
  ),
  Briefcase: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
  ),
  Sparkles: ({ className }: { className?: string }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>
  ),
  ArrowRight: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd" /></svg>
  ),
  Calendar: ({ className }: { className?: string }) => (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 2a1 1 0 00-1 1v1H4a2 2 0 00-2 2v10a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-1V3a1 1 0 10-2 0v1H7V3a1 1 0 00-1-1zm0 5a1 1 0 000 2h8a1 1 0 100-2H6z" clipRule="evenodd" /></svg>
  ),
};

interface StatItem {
  id: number;
  icon: React.ReactNode;
  count: string;
  label: string;
}

const statsData: StatItem[] = [
  {
    id: 1,
    icon: <Icons.Users className="w-10 h-10" />,
    count: "73K+",
    label: "Active Job Seekers",
  },
  {
    id: 2,
    icon: <Icons.UserSearch className="w-10 h-10" />,
    count: "360+",
    label: "Recruiters",
  },
  {
    id: 3,
    icon: <Icons.Building className="w-10 h-10" />,
    count: "350+",
    label: "Companies",
  },
  {
    id: 4,
    icon: <Icons.Briefcase className="w-10 h-10" />,
    count: "1000+",
    label: "Jobs Posted",
  },
];

export default function Home() {
  return (
    <div className="flex flex-col w-full">
      {/* HERO Section */}
      <section className="w-full bg-gradient-to-b from-orange-600 to-orange-700 text-white">
        <div className="container mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 md:py-32 text-center">
          
          <div className="mb-4">
            <span className="inline-block bg-white/10 rounded-full px-4 py-1 text-xs font-medium text-white">
              AI-Powered Talent Sourcing Platform
            </span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white tracking-tight mb-6">
            Find the Perfect Tech Talent <br /> with AI Precision
          </h1>

          <p className="text-lg md:text-xl text-orange-100 max-w-3xl mx-auto mb-10">
            SourcingXpress transforms how you discover, engage, and hire top tech talent.
            Powered by advanced AI, tailored for modern recruiting needs.
          </p>

          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <Link 
              href="/post-job" 
              className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-white text-orange-900 font-semibold rounded-lg shadow-md transition-all duration-200 hover:bg-gray-100 hover:scale-105"
            >
              <Icons.Sparkles className="w-5 h-5" />
              <span>Post A Free Job</span>
              <Icons.ArrowRight className="w-4 h-4" />
            </Link>

            <button className="flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-black/40 text-white font-semibold rounded-lg transition-all duration-200 hover:bg-black/60 hover:scale-105">
              <Icons.Calendar className="w-5 h-5" />
              <span>Schedule a Demo</span>
            </button>
          </div>

        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-white py-16 px-4 sm:px-6 lg:px-8">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 mb-4">
              Trusted by Tech Professionals
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Join thousands of candidates and professionals who trust SourcingXPress
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((stat) => (
              <div 
                key={stat.id} 
                className="flex flex-col items-center justify-center p-8 border border-gray-200 rounded-lg bg-white hover:shadow-lg transition-shadow duration-300"
              >
                <div className="text-orange-600 mb-4">
                  {stat.icon}
                </div>
                <h3 className="text-3xl font-bold text-slate-900 mb-2">
                  {stat.count}
                </h3>
                <p className="text-gray-600 font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Connect With Section */}
      <section className="w-full bg-slate-50 py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="container mx-auto max-w-7xl">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            
            {/* Left Content */}
            <div className="w-full lg:w-1/2 text-left">
              <h2 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight mb-6">
                Connect with <span className="text-orange-600">top talent</span> and 
                shortlist <span className="text-orange-600">in minutes</span>
              </h2>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                SourcingXPress is your hiring superhero, our tech lets you skip 
                manual screening and find top candidates in minutes with 80%+ matches!
              </p>

              <ul className="space-y-4 mb-10">
                {[
                  "Post jobs for free",
                  "Save time with exact match percentage",
                  "Save money with pay-per-shortlist"
                ].map((item, index) => (
                  <li key={index} className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-orange-500 rounded-full flex-shrink-0" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </li>
                ))}
              </ul>

              <Link 
                href="/post-job"
                className="flex items-center gap-2 bg-orange-600 hover:bg-orange-700 text-white font-semibold px-8 py-3 rounded-lg transition-all duration-200 shadow-md hover:shadow-lg w-fit"
              >
                Post a free job
                <Icons.ArrowRight className="w-4 h-4"/>
              </Link>
            </div>

            {/* Right Content - Radar Animation */}
            {/* <div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative"></div> */}
            <div className=" w-full lg:w-1/2 flex justify-center lg:justify-end relative ">
             <RadarSection/>
              {/* <div className="relative w-[350px] h-[350px] sm:w-[450px] sm:h-[450px] flex items-center justify-center"> */}
                {/* Background Gradient Circle */}
                {/* <div className="absolute inset-0 bg-orange-50/80 rounded-full blur-xl transform scale-90" /> */}
                {/* Dashed Circles */}
                {/* <div className="absolute w-full h-full border border-dashed border-gray-300 rounded-full" />
                <div className="absolute w-[70%] h-[70%] border border-dashed border-gray-300 rounded-full" />
                <div className="absolute w-[40%] h-[40%] border border-dashed border-gray-300 rounded-full" /> */}
                {/* Connecting Line */}
                {/* <div className="absolute w-[35%] h-[2px] bg-orange-400 top-[35%] left-[18%] -rotate-45 origin-right" /> */}

                {/* Connecting Line */}
{/* <div className="absolute h-[2px] bg-orange-400 top-1/2 left-1/2 w-[50%] origin-left -rotate-[132deg] -translate-y-1/2 z-0" /> */}

                {/* Center Avatar */}
                {/* <div className="absolute z-20 w-20 h-20 sm:w-24 sm:h-24 rounded-full border-4 border-white shadow-xl overflow-hidden bg-gray-200">
                   <img 
                     src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?fit=crop&w=200&h=200" 
                     alt="Central Candidate" 
                     className="w-full h-full object-cover"
                   />
                </div> */}

                {/* Other Avatars */}
                {/* <div className="absolute top-[10%] left-[25%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-orange-200 shadow-lg overflow-hidden bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute top-[20%] right-[10%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-[20%] left-[10%] z-10 w-14 h-14 sm:w-16 sm:h-16 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
                </div>
                <div className="absolute bottom-[10%] right-[20%] z-10 w-12 h-12 sm:w-14 sm:h-14 rounded-full border-2 border-white shadow-lg overflow-hidden bg-gray-200">
                   <img src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?fit=crop&w=150&h=150" alt="Candidate" className="w-full h-full object-cover" />
                </div>

              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Remaining Sections */}
      {/* <RadarSection/> */}
      <BackedByLeadersSection />
      <PlatformInAction />
      <TeamSection />
      <TestimonialsSection />
      <CTASection />
    </div>
  );
}