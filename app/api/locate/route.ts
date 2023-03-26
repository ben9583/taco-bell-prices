import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const { searchParams } = new URL(request.url);
  const location = searchParams.get('location');

  if(!location) {
    return NextResponse.json({ error: 'Missing location' }, { status: 400 });
  }

  const response = await fetch(`https://api.tacobell.com/location/v1/${location}`);
  if(!response.ok) {
    return new Response(response.body, { status: response.status });
  }
  const json = await response.json();

  return NextResponse.json(json);
}
