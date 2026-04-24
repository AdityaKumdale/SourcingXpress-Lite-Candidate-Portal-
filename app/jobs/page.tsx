import { getJobs } from "../lib/api"; 
import JobsClientPage from "../components/JobsClientPage"; 
import { serverClient } from "../server";

// Define props for Next.js 15 server component
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// This is a Server Component. It runs on the server.
export default async function JobsPage({ searchParams }:Props) {            // { searchParams: { search?: string, tab?: string } }
  
  // const search = searchParams.search || "";
  // const tab = searchParams.tab || "live";
 
  // const liveJobs = await getJobs(search);



   // Await searchParams as required by Next.js 15
  const resolvedSearchParams = await searchParams;
  
  // Extract and normalize search parameters
  const search = typeof resolvedSearchParams.search === 'string' ? resolvedSearchParams.search : "";
  const tab = typeof resolvedSearchParams.tab === 'string' ? resolvedSearchParams.tab : "live";

  // Fetch live jobs using the search query
  // const liveJobs = await getJobs(search);

  // CHANGE: Call tRPC serverClient directly
  const liveJobs = await serverClient.jobs.list({ search });

  
  // Hydrate the client component with initial server data
  // The client component will handle the "Applied Jobs" logic since it needs localStorage.
  return (
    <main className="min-h-screen bg-white">
      <JobsClientPage 
        initialLiveJobs={liveJobs} 
        searchParams={{ search, tab }} 
      />
    </main>
  );
}