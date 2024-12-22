import connectDb from "@/app/_lib/connectDB";
import Cabin from "@/app/_lib/models/cabin";
import { NextResponse } from "next/server";

export async function GET() {
  await connectDb();
  try {
    const cabins = await Cabin.find();
    return NextResponse.json({
      data: cabins,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching posts",
    });
  }
}
