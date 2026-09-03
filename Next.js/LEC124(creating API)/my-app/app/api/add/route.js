import { NextResponse } from "next/server";
export async function GET() {
  return NextResponse.json({ message: 'Hekkiiiiio worldd' })
}
export async function POST(request) {
    const data = await request.json();
    console.log(data);
    return NextResponse.json({success:true , data })
}