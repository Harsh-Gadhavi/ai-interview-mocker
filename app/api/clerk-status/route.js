import { NextResponse } from 'next/server';

export async function GET() {
  const secret = process.env.CLERK_SECRET_KEY;
  if (!secret) {
    return NextResponse.json({ ok: false, message: 'CLERK_SECRET_KEY not configured' }, { status: 500 });
  }

  try {
    const res = await fetch('https://api.clerk.com/v1/users?limit=1', {
      headers: {
        Authorization: `Bearer ${secret}`,
        'Content-Type': 'application/json',
      },
    });

    const text = await res.text();
    let body;
    try { body = JSON.parse(text); } catch (e) { body = { message: text }; }

    if (!res.ok) {
      const msg = body?.message || body?.errors || text || 'Unknown Clerk error';
      return NextResponse.json({ ok: false, message: String(msg) }, { status: res.status });
    }

    // If OK, return healthy
    return NextResponse.json({ ok: true, message: 'Clerk API reachable' }, { status: 200 });
  } catch (err) {
    return NextResponse.json({ ok: false, message: String(err) }, { status: 500 });
  }
}
