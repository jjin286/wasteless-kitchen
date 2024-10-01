"use server"
import { createBrowserClient, createServerClient } from '@supabase/ssr'
import { type NextRequest, type NextResponse } from "next/server";
import { cookies } from "next/headers";
import { getCookie, setCookie } from "cookies-next";

export async function createClient() {
  // Create a supabase client on the browser with project's credentials
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  )
}

export async function createSupabaseFrontendClient(){
  return createBrowserClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!
  );
}

// export async function createSupabaseServerClient(){
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         get(name) {

//         },
//         set(name, value, options){

//         },
//         remove(name, options){

//         },
//       }
//     }
//   )
// }

export async function createSupabaseAppServerClient(serverComponent = false){
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return cookies().get(name)?.value;
        },
        set(name, value, options){
          if (serverComponent) return;
          cookies().set(name, value, options);
        },
        remove(name, options){
          if (serverComponent) return;
          cookies().set(name, "", options);
        },
      }
    }
  );
}

export async function createSupabseServerComponentClient(){
  cookies().getAll();
  return createSupabaseAppServerClient(true);
}

export async function createSupabaseReqResClient(
  req: NextRequest,
  res: NextResponse
){
  cookies().getAll();
  return createServerClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
    {
      cookies: {
        get(name) {
          return getCookie(name, {req, res});
        },
        set(name, value, options){
          setCookie(name, value, {req, res, ...options})
        },
        remove(name, options){
          setCookie(name, "", {req, res, ...options})
        },
      }
    }
  );
}

// export async function createSupabaseServerClient(component: boolean = false) {
//   const cookieStore = cookies();
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return cookieStore.getAll();
//         },
//         setAll(cookiesToSet) {
//           if (component) return;
//           cookiesToSet.forEach(({ name, value, options }) =>
//             cookieStore.set(name, value, options)
//           );
//         },
//       },
//     }
//   );
// }

// export async function createSupabaseServerComponentClient() {
//   cookies().getAll();
//   return createSupabaseServerClient(true);
// }

// export async function createSupabaseReqResClient(
//   req: NextRequest,
//   res: NextResponse
// ) {
//   cookies().getAll();
//   return createServerClient(
//     process.env.NEXT_PUBLIC_SUPABASE_URL!,
//     process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
//     {
//       cookies: {
//         getAll() {
//           return req.cookies.getAll();
//         },
//         setAll(cookiesToSet) {
//           cookiesToSet.forEach(({ name, value, options }) =>
//             res.cookies.set(name, value, options)
//           );
//         },
//       },
//     }
//   );
// }