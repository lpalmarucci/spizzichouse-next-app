import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export function middleware(request: NextRequest) {
  const cookie = cookies();
  const { pathname } = request.nextUrl;
  if (request.nextUrl.pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/auth") && cookie.get("auth")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!pathname.startsWith("/auth") && !cookie.get("auth")) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}
