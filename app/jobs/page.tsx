import { getJobs } from "../lib/api"; 
import JobsClientPage from "../components/JobsClientPage"; 
import { serverClient } from "../server";

// 1. Define the props type correctly for Next.js 15
type Props = {
  searchParams: Promise<{ [key: string]: string | string[] | undefined }>
}

// This is a Server Component. It runs on the server.
export default async function JobsPage({ searchParams }:Props) {            // { searchParams: { search?: string, tab?: string } }
  
  // const search = searchParams.search || "";
  // const tab = searchParams.tab || "live";
 
  // const liveJobs = await getJobs(search);



   // 2. AWAIT the searchParams before accessing properties
  const resolvedSearchParams = await searchParams;
  
  // 3. Safely extract strings (handling arrays/undefined)
  const search = typeof resolvedSearchParams.search === 'string' ? resolvedSearchParams.search : "";
  const tab = typeof resolvedSearchParams.tab === 'string' ? resolvedSearchParams.tab : "live";

  // // 4. Fetch Live Jobs ON THE SERVER using the extracted string
  // const liveJobs = await getJobs(search);

  // CHANGE: Call tRPC serverClient directly
  const liveJobs = await serverClient.jobs.list({ search });

  
  // 2. Pass this initial data to the client component.
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