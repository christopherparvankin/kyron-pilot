import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  try {
    // This would typically fetch from your Sanity CMS or database
    const resources = [
      {
        id: "1",
        title: "Gastroenterology Patient Guide",
        description: "Comprehensive guide for patients",
        url: "/resources/gastroenterology-guide",
      },
      {
        id: "2",
        title: "Preparing for Your Colonoscopy",
        description: "Step-by-step preparation instructions",
        url: "/resources/colonoscopy-prep",
      },
    ];

    return NextResponse.json({ resources });
  } catch (error) {
    return NextResponse.json(
      { error: "Failed to fetch resources" },
      { status: 500 }
    );
  }
}
