import { NextRequest, NextResponse } from "next/server";

export async function GET(req: NextRequest) {
  const rawUrl = req.nextUrl.searchParams.get("url");
  if (!rawUrl) {
    return new NextResponse("Missing url parameter", { status: 400 });
  }

  const decoded = decodeURIComponent(rawUrl).split("?")[0];
  const safePath = decoded.startsWith("/") ? decoded : `/${decoded}`;
  return NextResponse.redirect(new URL(safePath, req.url), 307);
}
