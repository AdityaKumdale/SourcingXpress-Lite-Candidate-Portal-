'use client';

import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import Link from "next/link";
import { loginUser } from "../lib/api"; 
import { loginUserAction } from "../actions/authActions";

export default function LoginPage() {
    const router = useRouter();
    const searchParams = useSearchParams();
    
    // Get messages from URL (e.g. ?message=Please log in first)
    const message = searchParams.get("message");
     const rawRedirect = searchParams.get("redirectTo");

    // FIX: If the redirect is missing OR it is just the home page "/", default to "/jobs".
    // Otherwise, respect the specific redirect (e.g., going back to a job detail page).
    const redirectTo = (rawRedirect && rawRedirect !== '/') ? rawRedirect : "/jobs";
   // const redirectTo = searchParams.get("redirectTo") || "/jobs";

    const [email, setEmail] = useState("user@test.com"); // Default for testing
    const [password, setPassword] = useState("123");     // Default for testing
    const [error, setError] = useState<string | null>(null);
    const [isSubmitting, setIsSubmitting] = useState(false);

    // Redirect if already logged in
    useEffect(() => {
        const isLoggedIn = localStorage.getItem("loggedin") === "true";
        if (isLoggedIn) {
            router.replace("/jobs");
        }
    }, [router]);

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        setIsSubmitting(true);

        // try {
            // // Call the API
            // const data = await loginUser({ email, password });
            
             // // Save auth data
            // localStorage.setItem("loggedin", "true");
            // localStorage.setItem("user", JSON.stringify(data.user));
            
            // // Redirect
            // router.push(redirectTo);

            // CHANGE:- Use the Server Action
        const result = await loginUserAction({ email, password });

           setIsSubmitting(false); // Move this before the check so it stops loading

        if (!result.success) {
            setError(result.error || "Failed to log in");
            return;
        }

        // Success logic
        try {
            localStorage.setItem("loggedin", "true");
            localStorage.setItem("user", JSON.stringify(result.data?.user)); // Access .data
            router.push(redirectTo);
        } catch (err) {
             console.error("Storage error", err);
        }
            
        // } catch (err: any) {
        //     setError(err.message || "Failed to log in");
        // } finally {
        //     setIsSubmitting(false);
        // }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-[#4b4b4b] px-4">
            
            <div className="bg-white w-full max-w-[400px] p-8 md:p-10 rounded-sm shadow-xl">
                
                <div className="flex flex-col items-center mb-8">
                    {/* Replaced img with simple text/icon if logo file is missing, or keep img if you have it in public/ */}
                    <div className="text-2xl font-black italic tracking-tighter mb-4">
                         <span className="text-red-600">SOURCING</span>
                         <span className="text-orange-500">XPRESS</span>
                    </div>
                    
                    <h1 className="text-2xl font-medium text-gray-900">Log in</h1>
                    <p className="text-sm text-gray-500 mt-2 text-center">
                        Log in to SourcingXPress to continue
                    </p>
                </div>

                {/* Success/Info Message from URL */}
                {message && (
                    <div className="mb-4 text-sm text-center text-red-600 bg-red-50 p-2 rounded border border-red-200">
                        {message}
                    </div>
                )}

                {/* Error Message from Submission */}
                {error && (
                    <div className="mb-4 text-sm text-center text-red-600 bg-red-50 p-2 rounded border border-red-200">
                        {error}
                    </div>
                )}

                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    
                    <div className="space-y-1">
                        <label className="sr-only" htmlFor="email">Email address</label>
                        <input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="Email address*"
                            required
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        />
                    </div>

                    <div className="space-y-1">
                        <label className="sr-only" htmlFor="password">Password</label>
                        <input
                            id="password"
                            name="password"
                            type="password"
                            placeholder="Password*"
                            required
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            className="w-full p-3 border border-gray-300 rounded text-gray-900 placeholder-gray-500 focus:outline-none focus:border-orange-500 focus:ring-1 focus:ring-orange-500 transition-all"
                        />
                    </div>

                    <button
                        disabled={isSubmitting}
                        className="w-full bg-black text-white py-3 rounded font-medium mt-2 hover:bg-gray-800 transition-colors disabled:opacity-70 disabled:cursor-not-allowed"
                    >
                         {isSubmitting ? "Logging in..." : "Log in"}
                    </button>

                </form>

                <div className="mt-6 text-center text-sm text-gray-600">
                    Don't have an account?{' '}
                    <Link href="/signup" className="text-blue-600 hover:underline font-medium">
                        Sign up
                    </Link>
                </div>
            </div>
        </div>
    );
}