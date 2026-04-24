import { NextResponse } from 'next/server';
import { readDb } from '../../../lib/db';

export async function POST(request: Request) {
    try {
  const body = await request.json();
  const { email, password } = body;

  const db = await readDb();
  const user = db.users.find(u => u.email === email && u.password === password);

  if (!user) {
    return NextResponse.json({ message: "Invalid credentials" }, { status: 401 });
  }

  // Remove password before sending back
  const { password: _, ...userWithoutPass } = user;

//   return NextResponse.json({
//     user: userWithoutPass,
//     token: `fake-jwt-token-${user.id}`
//   });
 return NextResponse.json({
      user: userWithoutPass,
      token: `fake-token-for-${user.id}`
    });
  } catch (error) {
    return NextResponse.json(
      { message: 'Internal server error' },
      { status: 500 }
    );
  }
}