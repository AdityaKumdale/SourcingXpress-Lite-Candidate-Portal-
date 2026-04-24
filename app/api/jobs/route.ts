/////TO BE REMOVED SOON




import { NextResponse ,NextRequest} from "next/server"
import { readDb } from "../../lib/db"

export async function GET(request: NextRequest) {
  try{
  const { searchParams } = new URL(request.url)
  //const searchParams = request.nextUrl.searchParams;

  const search = searchParams.get('search')?.toLowerCase();

  const db = await readDb();
  let jobs = db.jobs;

  if (search) {
    const searchTerms = search.split(' ').filter(t => t);
    jobs = jobs.filter(job => {
      return searchTerms.every(term => 
        job.title.toLowerCase().includes(term) ||
        job.company.toLowerCase().includes(term) ||
        job.location.toLowerCase().includes(term) ||
        job.skills.some(skill => skill.toLowerCase().includes(term))
      );
    });
  }

  return NextResponse.json({ jobs });

}catch(error){
  return NextResponse.json(
      { message: 'Failed to fetch jobs' },
      { status: 500 }
    )
}
}