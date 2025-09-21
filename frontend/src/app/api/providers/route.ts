import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch from your Sanity CMS or database
    const providers = [
      {
        id: "1",
        name: "Dr. John Smith",
        specialty: "Gastroenterology",
        location: "Miami, FL",
      },
      {
        id: "2",
        name: "Dr. Jane Doe",
        specialty: "Gastroenterology",
        location: "Fort Lauderdale, FL",
      },
    ];

    return NextResponse.json({ providers });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch providers" },
      { status: 500 }
    );
  }
}
