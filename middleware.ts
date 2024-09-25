import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
// import { createClient } from "@/utils/supabase/client";
import { createClient } from "./utils/supabase/client";
// import { createClient } from "@supabase/supabase-js";

export function middleware(request: NextRequest, event: NextFetchEvent) {
  console.log("Triggered middleware")
  // const userToken = request.cookies.get('your-key')?.value;
  const supabase = createClient();
  let data = {};

  const checkLogin = async () => {
    console.log("Triggered check login")
    // data = await supabase.auth.getUser();
    data = await supabase.auth.getSession();
    console.log("Data inside check", data)
  }

  event.waitUntil(checkLogin());
  // data = {user: {id : 123}}
  console.log("Outside data", data)
  if(data?.user?.id){
    console.log("Inside valid user")
    // return NextResponse.redirect(new URL('/', request.url))
    return NextResponse.next()
  }
  else {
    console.log("Inside invlaid user")
    return NextResponse.redirect(new URL('/login',request.url))
  }
}
export const config = {
  matcher: ['/recipes', '/ingredients/:path*'],
}