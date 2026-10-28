import { NextRequest, NextResponse } from "next/server";

export function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  if (pathname === "/_vercel/image") {
    const rawUrl = req.nextUrl.searchParams.get("url");
    if (rawUrl) {
      const decoded = decodeURIComponent(rawUrl).split("?")[0];
      if (decoded.startsWith("/")) {
        const dest = req.nextUrl.clone();
        dest.pathname = decoded;
        dest.search = "";
        return NextResponse.rewrite(dest);
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/_vercel/image"],
};
