import { Job } from "../types/types";

export function jobMatchesSearch(job: Job, searchTerm: string): boolean {
  if (!searchTerm) return true;
  
  const lowerSearchTerm = searchTerm.toLowerCase();
  const searchTerms = lowerSearchTerm.split(' ').filter(t => t); 

  return searchTerms.every(term => { 
    return (
      job.title.toLowerCase().includes(term) ||
      job.company.toLowerCase().includes(term) ||
      job.location.toLowerCase().includes(term) ||
      job.experience.toLowerCase().includes(term) ||
      job.skills.some((skill: string) => skill.toLowerCase().includes(term)) ||
      job.companyType.some((type: string) => type.toLowerCase().includes(term))
    );
  });
}

// Helper to get the base URL for API calls
export function getBaseUrl() {
  if (typeof window !== 'undefined') {
    // Browser should use relative path
    return '';
  }
  // Server needs full URL
  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }
  return 'http://localhost:3000';
}