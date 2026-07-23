import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    const {
      name,
      email,
      phone,
      company,
      domain,
      candidates,
      deliveryMode,
      location,
    } = body;

    if (!name || !email || !phone) {
      return NextResponse.json(
        {
          success: false,
          message: "Name, email and phone are required.",
        },
        {
          status: 400,
        },
      );
    }

    // Mock database operation
    const enquiry = {
      id: crypto.randomUUID(),
      name,
      email,
      phone,
      company,
      domain,
      candidates,
      deliveryMode,
      location,
      createdAt: new Date().toISOString(),
    };

    console.log("New enquiry received:", enquiry);

    return NextResponse.json(
      {
        success: true,
        message: "Enquiry submitted successfully.",
        data: enquiry,
      },
      {
        status: 201,
      },
    );
  } catch {
    return NextResponse.json(
      {
        success: false,
        message: "Unable to submit enquiry.",
      },
      {
        status: 500,
      },
    );
  }
}
