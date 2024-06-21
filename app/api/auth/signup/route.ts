import { NextResponse } from "next/server"

export async function POST(req: Request, context: any){
  const { params } = context;

  return NextResponse.json({filler: 'data'});
}