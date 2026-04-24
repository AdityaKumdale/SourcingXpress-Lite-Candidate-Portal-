import { NextRequest, NextResponse } from 'next/server';
import { readDb } from '../../lib/db';
import { jobMatchesSearch } from '../../lib/utils';


///Route handlers




export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const userId = searchParams.get('userId');
    const search = searchParams.get('search');

    if (!userId) {
      return NextResponse.json(
        { error: 'User not specified' },
        { status: 401 }
      );
    }

    const db = await readDb();

    // Get applications for this user
    const applications = db.applications.filter(
      (app) => app.userId === userId
    );

    // Create a map of jobId -> status
    const appStatusMap = new Map<string, "pending" | "reviewed" | "rejected">();
    applications.forEach((app) => {
      appStatusMap.set(app.jobId, app.status);
    });

    const jobIds = Array.from(appStatusMap.keys());

    // Get jobs that user has applied to
    let appliedJobs = db.jobs.filter((job) => jobIds.includes(job.id));

    // Apply search filter if provided
    if (search) {
      appliedJobs = appliedJobs.filter((job) => jobMatchesSearch(job, search));
    }

    // Add application status to each job
    const appliedJobsWithStatus = appliedJobs.map((job) => ({
      ...job,
      applicationStatus: appStatusMap.get(job.id)
    }));

    return NextResponse.json({ jobs: appliedJobsWithStatus });
  } catch (error) {
    console.error("API Error:", error);
    return NextResponse.json(
      { message: 'Failed to fetch applications' },
      { status: 500 }
    );
  }
}