import type { Job } from "../types/types";
import { getBaseUrl } from "./utils";


////TO BE REMOVED SOON/////





const BASE_URL = getBaseUrl();

// Helper to safely construct URL in both Server and Client environments
function createUrl(path: string) {
  if (typeof window !== "undefined") {
    // Client: Use window.location.origin as the base for relative paths
    return new URL(`${BASE_URL}${path}`, window.location.origin);
  }
  // Server: BASE_URL should already be absolute (http://localhost:3000)
  return new URL(`${BASE_URL}${path}`);
}

export async function getJobs(searchTerm?: string | null): Promise<Job[]> {
  const url = createUrl('/api/jobs');

  if (searchTerm) {
    url.searchParams.append('search', searchTerm);
  }

  const res = await fetch(url.toString(), { cache: 'no-store' });

  if (!res.ok) {
    // Throwing an error object that Next.js error boundaries can catch/display
    throw new Error("Failed to fetch jobs");
  }

  const data = await res.json();
  return data.jobs;
}

export async function getJob(jobId: string): Promise<Job> {
  const url = createUrl(`/api/jobs/${jobId}`);
  
  const res = await fetch(url.toString(), { cache: 'no-store' });
  
  if (!res.ok) {
    throw new Error(res.status === 404 ? "Job not found" : "Failed to fetch job details");
  }
  
  const data = await res.json();
  return data.job;
}

export async function loginUser(creds: Object) {
  // We use .toString() on the URL object to ensure it's formatted correctly
  const url = createUrl('/api/auth/login');
  
  const res = await fetch(url.toString(), {
    method: "POST",
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(creds)
  });
  
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message || "Login failed",
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}

export async function applyToJob(jobId: string, userId: string) {
  const url = createUrl(`/api/jobs/${jobId}/apply`);

  const res = await fetch(url.toString(), {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ userId: userId })
  });

  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message || "Failed to apply",
      statusText: res.statusText,
      status: res.status
    };
  }

  return data;
}

export async function getAppliedJobs(userId: string, searchTerm?: string | null) {
  const url = createUrl('/api/applications');
  
  url.searchParams.append('userId', userId);

  if (searchTerm) {
    url.searchParams.append('search', searchTerm);
  }

  const res = await fetch(url.toString(), { cache: 'no-store' });
  const data = await res.json();

  if (!res.ok) {
    throw {
      message: data.message || 'Failed to fetch applications',
      statusText: res.statusText,
      status: res.status
    };
  }

  return data.jobs;
}

// export async function getAppliedJobs(userId: string, searchTerm?: string | null) {
//   const url = new URL(`${BASE_URL}/api/applications`);
//   url.searchParams.append('userId', userId);

//   if (searchTerm) {
//     url.searchParams.append('search', searchTerm);
//   }

//   const res = await fetch(url.toString(), { cache: 'no-store' });
//   const data = await res.json();

//   if (!res.ok) {
//     throw {
//       message: data.message || 'Failed to fetch applications',
//       statusText: res.statusText,
//       status: res.status
//     };
//   }

//   return data.jobs;
// }