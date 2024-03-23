import { NextRequest, NextResponse } from "next/server";
import useServerSession from "@/hooks/useServerSession";

export async function middleware(request: NextRequest) {
  const user = useServerSession();
  const { pathname } = request.nextUrl;
  if (request.nextUrl.pathname.startsWith("/_next/")) {
    return NextResponse.next();
  }

  if (pathname.startsWith("/auth") && !!user) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  if (!pathname.startsWith("/auth") && !user) {
    return NextResponse.redirect(new URL("/auth", request.url));
  }

  return NextResponse.next();
}
