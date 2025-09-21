import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch from your Sanity CMS or database
    const services = [
      {
        id: "1",
        name: "Colonoscopy",
        description: "Gold standard procedure for colon examination",
        category: "Diagnostic",
      },
      {
        id: "2",
        name: "Upper Endoscopy",
        description: "Examination of the upper digestive tract",
        category: "Diagnostic",
      },
      {
        id: "3",
        name: "Capsule Endoscopy",
        description:
          "Advanced imaging technology for digestive tract examination",
        category: "Diagnostic",
      },
    ];

    return NextResponse.json({ services });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch services" },
      { status: 500 }
    );
  }
}
