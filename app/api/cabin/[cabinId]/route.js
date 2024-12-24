import connectDb from "@/app/_lib/connectDB";
import Cabin from "@/app/_lib/models/cabin";
import { NextResponse } from "next/server";

export async function GET(request, { params }) {
  const { cabinId } = params;

  await connectDb();
  try {
    const cabin = await Cabin.findById(cabinId);
    return NextResponse.json({
      data: cabin,
    });
  } catch (error) {
    return NextResponse.json({
      message: "Error fetching posts",
    });
  }
}
