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
  if(request.nextUrl.pathname.startsWith('/recipes') || request.nextUrl.pathname.startsWith('/ingredients')){
    if(!user){
      return NextResponse.redirect(new URL('/login',request.url))
    }
  }

  if(request.nextUrl.pathname.startsWith('/login') || request.nextUrl.pathname.startsWith('/signup')){
    if(user){
      return NextResponse.redirect(new URL('/',request.url))
    }
  }


  return response;
}

// export const config = {
//   matcher: ['/recipes/:path*', '/ingredients/:path*',],
// }
