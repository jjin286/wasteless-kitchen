import { NextResponse } from "next/server";
import type { NextFetchEvent, NextRequest } from "next/server";
// import { createSupabaseReqResClient } from "./app/utils/supabase/client";

export async function middleware(request: NextRequest) {
//   // const data = Object.values(request.cookies)[0];
//   // let value = data.values().next().value.value;
//   // // value = JSON.stringify(value);
//   // console.log("User middleware",  value)

//   // let user = JSON.parse(value);
//   // user = JSON.parse(JSON.stringify(user)).value;
//   // user = JSON.parse(user);

//   // console.log("User parse", typeof user)
//   // console.log("User ", user)
//   // // console.log("Value", JSON.stringify(value) )
//   // // const user = JSON.parse(data.values().next().value.value.user)?.user;
//   // // console.log("User middleware user data", JSON.parse(value));

//   // if(user.user_id){
//   //   return NextResponse.next()
//   // }
//   // else {
//   //   return NextResponse.redirect(new URL('/login',request.url))
//   // }
  let response = NextResponse.next({
    request: {
      headers: request.headers,
    },
  });

//   const supabase = await createSupabaseReqResClient(request, response);

//   const {data: { user }} = await supabase.auth.getUser();

//   console.log(user)
  return response;
}

// export const config = {
//   matcher: ['/recipes', '/ingredients'],
// }

// // {"access_token":"eyJhbGciOiJIUzI1NiIsImtpZCI6IkppeGZ5SUZMWmQxSDVvT1MiLCJ0eXAiOiJKV1QifQ.eyJpc3MiOiJodHRwczovL3Jwd2NicGpsbnd6d3pzcXhwaWdxLnN1cGFiYXNlLmNvL2F1dGgvdjEiLCJzdWIiOiJlYmJmODY1Yi01Y2EyLTQxOGEtYjUxMS1kY2ZlN2NmOWM3ZDMiLCJhdWQiOiJhdXRoZW50aWNhdGVkIiwiZXhwIjoxNzI3NzQ4MDkwLCJpYXQiOjE3Mjc3NDQ0OTAsImVtYWlsIjoiamFld29uLmppbjI4NkBnbWFpbC5jb20iLCJwaG9uZSI6IiIsImFwcF9tZXRhZGF0YSI6eyJwcm92aWRlciI6ImVtYWlsIiwicHJvdmlkZXJzIjpbImVtYWlsIiwiZ29vZ2xlIl19LCJ1c2VyX21ldGFkYXRhIjp7ImF2YXRhcl91cmwiOiJodHRwczovL2xoMy5nb29nbGV1c2VyY29udGVudC5jb20vYS9BQ2c4b2NKX1NZX0FNbm8yUmxpMlpvVGU2YUdkTU9rdEp4YVdRN2hVT2tka0tYY0J4Um1HSlE9czk2LWMiLCJlbWFpbCI6ImphZXdvbi5qaW4yODZAZ21haWwuY29tIiwiZW1haWxfdmVyaWZpZWQiOnRydWUsImZ1bGxfbmFtZSI6IkphZVdvbiBKaW4iLCJpc3MiOiJodHRwczovL2FjY291bnRzLmdvb2dsZS5jb20iLCJuYW1lIjoiSmFlV29uIEppbiIsInBob25lX3ZlcmlmaWVkIjpmYWxzZSwicGljdHVyZSI6Imh0dHBzOi8vbGgzLmdvb2dsZXVzZXJjb250ZW50LmNvbS9hL0FDZzhvY0pfU1lfQU1ubzJSbGkyWm9UZTZhR2RNT2t0SnhhV1E3aFVPa2RrS1hjQnhSbUdKUT1zOTYtYyIsInByb3ZpZGVyX2lkIjoiMTEzMjkyODE4NTUzMzYzMDM4Mjg2Iiwic3ViIjoiMTEzMjkyODE4NTUzMzYzMDM4Mjg2In0sInJvbGUiOiJhdXRoZW50aWNhdGVkIiwiYWFsIjoiYWFsMSIsImFtciI6W3sibWV0aG9kIjoib2F1dGgiLCJ0aW1lc3RhbXAiOjE3Mjc3NDQ0OTB9XSwic2Vzc2lvbl9pZCI6IjhiNWY1MThiLTYwMWQtNGViYS05MWI1LTYzMTFiNzQ1NWVmZCIsImlzX2Fub255bW91cyI6ZmFsc2V9.B4IAmmC2QzP6TUgm85UYHERtbUg2W-U8KiPkccaKSIA",
// // "token_type":"bearer",
// // "expires_in":3600,
// // "expires_at":1727748090,
// // "refresh_token":"0PTh_T0_jVc56996vOTKJQ",
// // "user":{
// //   "id":"ebbf865b-5ca2-418a-b511-dcfe7cf9c7d3",
// //   "aud":"authenticated",
// //   "role":"authenticated",
// //   "email":"jaewon.jin286@gmail.com",
// //   "email_confirmed_at":"2024-07-04T03:35:07.464492Z",
// //   "phone":"",
// //   "confirmation_sent_at":"2024-07-04T03:32:38.744938Z",
// //   "confirmed_at":"2024-07-04T03:35:07.464492Z",
// //   "last_sign_in_at":"2024-10-01T01:01:30.608821933Z",
// //   "app_metadata":{
// //     "provider":"email",
// //     "providers":["email","google"]},
// //     "user_metadata":{
// //       "avatar_url":"https://lh3.googleusercontent.com/a/ACg8ocJ_SY_AMno2Rli2ZoTe6aGdMOktJxaWQ7hUOkdkKXcBxRmGJQ=s96-c",
// //       "email":"jaewon.jin286@gmail.com",
// //       "email_verified":true,
// //       "full_name":"JaeWon Jin",
// //       "iss":"https://accounts.google.com",
// //       "name":"JaeWon Jin",
// //       "phone_verified":false,
// //       "picture":"https://lh3.googleusercontent.com/a/ACg8ocJ_SY_AMno2Rli2ZoTe6aGdMOktJxaWQ7hUOkdkKXcBxRmGJQ=s96-c",
// //       "provider_id":"113292818553363038286",
// //       "sub":"113292818553363038286"},
// //       "identities":[
// //         {"identity_id":"9d47ba54-26db-4d7f-912b-c3f9814a730a",
// //         "id":"ebbf865b-5ca2-418a-b511-dcfe7cf9c7d3",
// //         "user_id":"ebbf865b-5ca2-418a-b511-dcfe7cf9c7d3",
// //         "identity_data":{
// //           "email":"jaewon.jin286@gmail.com",
// //           "email_verified":false,
// //           "phone_verified":false,
// //           "sub":"ebbf865b-5ca2-418a-b511-dcfe7cf9c7d3"
// //         },
// //       "provider":"email",
// //       "last_sign_in_at":"2024-07-04T03:32