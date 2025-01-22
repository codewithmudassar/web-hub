
import Developer from "@/backend/developer";
import dbConnect from "@/backend/dbConnect";
import { NextResponse } from "next/server";

export async function POST(req) {
  await dbConnect();
  try {
    const data = await req.json();
    const developer = await Developer.create(data);
    return NextResponse.json({
      success: true,
      message: developer,
    },{status: 201});
  } catch (error) {
    if (error.code === 11000) {
      return NextResponse.json({
        success: false,
        message: "fullName Already Exist",
      },{status: 400});
    }
    return NextResponse.json({
      status: "error",
      message: error.message,
    });
  }
}

export async function GET(req) {
  try {
    // Connect to the database
    await dbConnect();

    // Fetch all developers
    const developers = await Developer.find();

    // Check if developers are found
    if (!developers || developers.length === 0) {
      return NextResponse.json(
        { success: false, message: "No developers found" },
        { status: 404 }
      );
    }

    // Return developers
    return NextResponse.json(
      {
       success: true,
       data: developers 
      },
      { status: 200 }
    );
  } catch (error) {
    // Log error for debugging
    console.error("Error fetching developers:", error);

    // Return error response
    return NextResponse.json(
      { success: false, message: "Failed to fetch developers" },
      { status: 500 }
    );
  }
}
