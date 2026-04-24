'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { useRouter, usePathname } from 'next/navigation';

// --- INLINE ICONS (Zero Dependencies) ---
const Icons = {
  Search: ({ className="" }) => <svg className={className} width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/></svg>,
  Sparkles: () => <svg width="16" height="16" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" /></svg>,
  ArrowRight: () => <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path fillRule="evenodd" d="M1 8a.5.5 0 0 1 .5-.5h11.793l-3.147-3.146a.5.5 0 0 1 .708-.708l4 4a.5.5 0 0 1 0 .708l-4 4a.5.5 0 0 1-.708-.708L13.293 8.5H1.5A.5.5 0 0 1 1 8z"/></svg>,
  User: ({ size = 16, className="" }) => <svg className={className} width={size} height={size} fill="currentColor" viewBox="0 0 16 16"><path d="M11 6a3 3 0 1 1-6 0 3 3 0 0 1 6 0z"/><path fillRule="evenodd" d="M0 8a8 8 0 1 1 16 0A8 8 0 0 1 0 8zm8-7a7 7 0 0 0-5.468 11.37C3.242 11.226 4.805 10 8 10s4.757 1.225 5.468 2.37A7 7 0 0 0 8 1z"/></svg>,
  Menu: ({ size = 24 }) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" /></svg>,
  Close: ({ size = 24 }) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg>,
  Logout: ({ size = 16 }) => <svg width={size} height={size} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" /></svg>,
  Linkedin: ({ className="" }) => <svg className={className} width="16" height="16" fill="currentColor" viewBox="0 0 16 16"><path d="M0 1.146C0 .513.526 0 1.175 0h13.65C15.474 0 16 .513 16 1.146v13.708c0 .633-.526 1.146-1.175 1.146H1.175C.526 16 0 15.487 0 14.854V1.146zm4.943 12.248V6.169H2.542v7.225h2.401zm-1.2-8.212c.837 0 1.358-.554 1.358-1.248-.015-.709-.52-1.248-1.342-1.248-.822 0-1.359.54-1.359 1.248 0 .694.521 1.248 1.327 1.248h.016zm4.908 8.212V9.359c0-.216.016-.432.08-.586.173-.431.568-.878 1.232-.878.869 0 1.216.662 1.216 1.634v3.865h2.401V9.25c0-2.22-1.184-3.252-2.764-3.252-1.274 0-1.845.7-2.165 1.193v.025h-.016a5.54 5.54 0 0 1 .016-.025V6.169h-2.4c.03.678 0 7.225 0 7.225h2.4z"/></svg>
};

const logo = "/images/logosm.svg"; 

export default function LayoutShell({ children }: { children: React.ReactNode }) {
    const [isLoggedIn, setIsLoggedIn] = useState(false);
    const [userName, setUserName] = useState("");
    const [userEmail, setUserEmail] = useState("");
    const [isMounted, setIsMounted] = useState(false);
    
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isUserDropdownOpen, setIsUserDropdownOpen] = useState(false);
    
    // Next.js hooks replace react-router-dom hooks
    const router = useRouter();
    const pathname = usePathname();

    const desktopUserDropdownRef = useRef<HTMLDivElement>(null);
    const mobileUserDropdownRef = useRef<HTMLDivElement>(null);
    const mobileMenuRef = useRef<HTMLDivElement>(null); 
    const mobileMenuButtonRef = useRef<HTMLButtonElement>(null); 
    const xref = useRef<HTMLButtonElement | null>(null);

    // Check Auth on Mount and Path Change
    useEffect(() => {
        setIsMounted(true);

        const loggedInStatus = localStorage.getItem("loggedin") === "true";
        const user = JSON.parse(localStorage.getItem("user") || "{}");

        setIsLoggedIn(loggedInStatus);
        setUserName(user.name || "User");
        setUserEmail(user.email || "");
        setIsMobileMenuOpen(false); 
        setIsUserDropdownOpen(false); 
    }, [pathname]); // Dependency on pathname (URL change)

    useEffect(() => {
        if(isMobileMenuOpen && !isLoggedIn){
                xref.current?.focus()
        }
    },[isMobileMenuOpen , !isLoggedIn])

    // Close dropdowns when clicking outside
    useEffect(() => {
        function handleClickOutside(event: MouseEvent) {
            const target = event.target as Node;
            const isClickInDesktop = desktopUserDropdownRef.current && desktopUserDropdownRef.current.contains(target);
            const isClickInMobile = mobileUserDropdownRef.current && mobileUserDropdownRef.current.contains(target);

            if (isUserDropdownOpen && !isClickInDesktop && !isClickInMobile) {
                setIsUserDropdownOpen(false);
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [isUserDropdownOpen]);

    function handleLogout(event: React.MouseEvent) {
        event.stopPropagation(); 
        localStorage.removeItem("loggedin");
        localStorage.removeItem("user");
        setIsLoggedIn(false);
        setUserName("");
        setUserEmail("");
        
        router.push("/"); // Next.js navigation
        
        setIsUserDropdownOpen(false); 
        setIsMobileMenuOpen(false); 
    }

    const handleResetScroll = () => {
        sessionStorage.removeItem('liveJobListScrollY');
        sessionStorage.removeItem('appliedJobListScrollY');
        if (typeof window !== 'undefined') window.scrollTo(0,0);
    }

    let clsForHead = isLoggedIn ? ' max-w-[921px]' : ' max-w-7xl';

     // Don't render the interactive header parts until mounted to prevent mismatches
    if (!isMounted) {
        return <div className="min-h-screen bg-white">{/* Optional loading state */}</div>;
    }

    return (
        <div className="min-h-screen flex flex-col bg-white text-slate-900 font-sans relative"> 
            <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
                <div className={`${clsForHead} mx-auto px-4 sm:px-6 lg:px-8`}>  
                    <div className="flex items-center justify-between h-20">
                        {/* LEFT SIDE */}
                        <div className="flex items-center gap-8 lg:gap-12">
                            <Link 
                                href={isLoggedIn ? "/jobs" : "/"} 
                                onClick={handleResetScroll}
                                className="flex items-center gap-1 text-2xl sm:text-3xl font-black italic tracking-tighter no-underline"
                            >
                                <span className="text-red-600">SOURCING</span>
                                <span className="text-orange-500">XPRESS</span>
                            </Link>
                            {!isLoggedIn && (
                                <nav className="hidden lg:flex items-center gap-8 text-[15px] font-medium text-slate-900">
                                    <Link href="/" className="hover:text-orange-600 transition-colors">Home</Link>
                                    <Link href="/about" className="hover:text-orange-600 transition-colors">About Us</Link>
                                    <Link href="/contact" className="hover:text-orange-600 transition-colors">Contact Us</Link>
                                </nav>
                            )}
                        </div>

                        {/* RIGHT SIDE */}
                        <div className="hidden lg:flex items-center gap-4">
                            {!isLoggedIn && (
                                <>
                                    <Link href="/jobs" className="flex items-center gap-2 bg-slate-950 text-white px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-slate-800 transition-colors">
                                        <Icons.Search className="text-white" />
                                        <span>Explore Tech Jobs</span>
                                    </Link>
                                    <Link href="/post-job" className="flex items-center gap-2 bg-orange-600 text-white px-5 py-2.5 rounded-lg text-sm font-bold uppercase tracking-wide hover:bg-orange-700 transition-all shadow-sm hover:shadow-md">
                                        <Icons.Sparkles />
                                        <span>Post A Free Job</span>
                                        <Icons.ArrowRight />
                                    </Link>
                                </>
                            )}
                            {isLoggedIn && (
                                <div className="relative" ref={desktopUserDropdownRef}>
                                    <button
                                        onClick={() => setIsUserDropdownOpen(prev => !prev)}
                                        className="flex items-center gap-2 bg-gray-100 text-slate-900 px-4 py-2.5 rounded-full text-sm font-semibold hover:bg-gray-200 transition-colors"
                                        title="User Menu"
                                    >
                                        <Icons.User size={20} className="text-slate-600" />
                                    </button>
                                    {isUserDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                                            <div className="py-1">
                                                <div className="px-4 py-2 text-sm text-gray-700">
                                                    <p className="font-semibold truncate">{userName}</p>
                                                    <p className="text-gray-500 truncate">{userEmail}</p>
                                                </div>
                                                <div className="border-t border-gray-100"></div>
                                                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsUserDropdownOpen(false)}>
                                                    <Icons.User size={16} /> Edit Profile
                                                </Link>
                                                <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                                    <Icons.Logout size={16} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            )}
                            {!isLoggedIn && (
                                <Link href={`/login?redirectTo=${pathname}`} className="flex items-center gap-2 bg-gray-100 text-slate-900 px-5 py-2.5 rounded-lg text-sm font-semibold hover:bg-gray-200 transition-colors">
                                    <Icons.User className="text-slate-600" />
                                    <span>Login/Signup</span>
                                </Link>
                            )}
                        </div>

                        {/* Mobile Menu Toggle */}
                        <div className="lg:hidden">
                            {isLoggedIn ? (
                                <div className="relative" ref={mobileUserDropdownRef}>
                                     <button onClick={() => setIsUserDropdownOpen(prev => !prev)} className="text-slate-900 p-2">
                                        <Icons.User size={24} /> 
                                    </button>
                                    {isUserDropdownOpen && (
                                        <div className="absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none z-40">
                                            <div className="py-1">
                                                <div className="px-4 py-2 text-sm text-gray-700">
                                                    <p className="font-semibold truncate">{userName}</p>
                                                    <p className="text-gray-500 truncate">{userEmail}</p>
                                                </div>
                                                <div className="border-t border-gray-100"></div>
                                                <Link href="/profile" className="flex items-center gap-2 px-4 py-2 text-sm text-gray-700 hover:bg-gray-100" onClick={() => setIsUserDropdownOpen(false)}>
                                                    <Icons.User size={16} /> Edit Profile
                                                </Link>
                                                <button onClick={handleLogout} className="flex items-center gap-2 w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100">
                                                    <Icons.Logout size={16} /> Logout
                                                </button>
                                            </div>
                                        </div>
                                    )}
                                </div>
                            ) : (
                                <button 
                                    id="mobile-menu-button"
                                    ref={mobileMenuButtonRef}
                                    className="text-slate-900 p-2"
                                    onClick={() => setIsMobileMenuOpen(prev => !prev)}
                                >
                                    <Icons.Menu size={28} />
                                </button>
                            )}
                        </div>
                    </div>
                </div>

                {/* Mobile Menu Drawer */}
                {!isLoggedIn && (
                    <>
                        <div 
                            className={`fixed inset-0 bg-black/50 z-[60] transition-opacity duration-300 ease-in-out ${isMobileMenuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"}`}
                            onClick={() => setIsMobileMenuOpen(false)} 
                        />
                        <div 
                            ref={mobileMenuRef}
                            className={`fixed inset-y-0 right-0 w-3/4 max-w-sm bg-white z-[70] shadow-2xl transform transition-transform duration-300 ease-in-out ${isMobileMenuOpen ? "translate-x-0" : "translate-x-full"}`}
                        >
                             <div className="absolute top-4 right-4">
                                <button ref={xref} onClick={() => setIsMobileMenuOpen(false)} className="text-gray-600 hover:text-gray-900 p-2 focus:outline-none" title="Close menu">
                                    <Icons.Close size={32} />
                                </button>
                            </div>
                            
                            <div className="flex flex-col items-center gap-6 mt-10">
                                <div className="text-2xl font-black italic tracking-tighter mb-8">
                                     <span className="text-red-600">SOURCING</span>
                                     <span className="text-orange-500">XPRESS</span>
                                </div>
                                <nav className="flex flex-col items-center text-xl font-bold gap-8">
                                    <Link href="/" className="text-gray-800 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Home</Link>
                                    <Link href="/jobs" className="text-gray-800 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Search Jobs</Link>
                                    <Link href="/about" className="text-gray-800 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>About Us</Link>
                                    <Link href="/contact" className="text-gray-800 hover:text-orange-600" onClick={() => setIsMobileMenuOpen(false)}>Contact Us</Link>
                                </nav>
                            </div>
                            
                            <div className="flex flex-col items-center gap-4 px-4 pb-10 mt-8">
                                <Link href="/post-job" className="flex items-center justify-center gap-2 bg-orange-600 text-white px-6 py-3 rounded-lg text-lg font-bold w-full max-w-xs hover:bg-orange-700 transition-all shadow-md" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Icons.Sparkles /> <span>POST A FREE JOB</span> <Icons.ArrowRight />
                                </Link>
                                <Link href={`/login?redirectTo=${pathname}`} className="flex items-center justify-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-lg text-lg font-bold w-full max-w-xs hover:bg-slate-800 transition-colors" onClick={() => setIsMobileMenuOpen(false)}>
                                    <Icons.User /> <span>Login/Signup</span>
                                </Link>
                            </div>
                        </div>
                    </>
                )}
            </header>

            {/* NEXT.JS REPLACEMENT FOR <Outlet /> */}
            <main className="flex-grow w-full">
                {children} 
            </main>

            <footer className="bg-slate-900 text-slate-400 py-12 mt-auto">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-8">
                    <div className="flex flex-col items-center md:items-start gap-4">
                        <div className="flex gap-6 text-sm font-medium">
                            <a href="#" className="flex items-center gap-2 hover:text-white transition-colors"> 
                                <Icons.Linkedin className="text-xl" /> LinkedIn
                            </a>
                            <a href="#" className="hover:text-white transition-colors">Contact Us</a>
                            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
                        </div>
                        <p className="text-xs text-slate-500">&copy; {new Date().getFullYear()} SourcingXPress. All rights reserved.</p>
                    </div>
                    <div className="border border-slate-700 rounded-lg p-3 flex items-center gap-3 bg-slate-800/50">
                        <div className="w-8 h-8 grid grid-cols-2 gap-0.5">
                            <span className="bg-[#F25022]"></span><span className="bg-[#7FBA00]"></span><span className="bg-[#00A4EF]"></span><span className="bg-[#FFB900]"></span>
                        </div>
                        <div className="flex flex-col leading-none">
                            <span className="text-white font-semibold text-sm">Microsoft</span>
                            <span className="text-[10px] text-slate-400">Partner for Startups</span>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    );
}