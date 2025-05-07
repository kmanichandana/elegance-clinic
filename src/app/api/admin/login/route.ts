import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { username, password } = await req.json();

  // Access credentials from environment variables
  const ADMIN_USERNAME = process.env.ADMIN_USERNAME;
  const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD;


  console.log("ENV_USERNAME:", ADMIN_USERNAME);
  console.log("ENV_PASSWORD:", ADMIN_PASSWORD);

  if (username === ADMIN_USERNAME && password === ADMIN_PASSWORD) {
    // Return a success response
    return NextResponse.json({ message: "Login successful!" }, { status: 200 });
  } else {
    // Return an error response
    return NextResponse.json({ error: "Invalid credentials" }, { status: 401 });
  }
}