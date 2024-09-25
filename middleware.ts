import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  const user = JSON.parse(request.cookies.get("sb-rpwcbpjlnwzwzsqxpigq-auth-token")?.value || null)?.user;

  if(user?.id){
    return NextResponse.next()
  }
  else {
    return NextResponse.redirect(new URL('/login',request.url))
  }
}
export const config = {
  matcher: ['/recipes', '/ingredients/:path*'],
}