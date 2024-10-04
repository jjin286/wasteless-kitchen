import { NextResponse } from "next/server";
import { NextFetchEvent, NextRequest } from "next/server";
import { createClient } from "./utils/supabase/server";

export async function middleware(request: NextRequest) {

  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

  const supabase = createClient();

  const {data: { user }} = await supabase.auth.getUser();
  console.log("User", user)

  if(!user){
    return NextResponse.redirect(new URL('/login',request.url))
  }

  return response;
}

export const config = {
  matcher: ['/recipes/:path*', '/ingredients/:path*',],
}
