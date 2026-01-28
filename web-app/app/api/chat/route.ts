import { NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { message, userId } = body;

    if (!message || !userId) {
      return new NextResponse("Message and UserId are required", { status: 400 });
    }

    // --- FIX START: Ensure User Exists ---
    // This fixes the "Foreign Key Constraint" error.
    // It checks if the user exists; if not, it creates them.
    await prisma.user.upsert({
      where: { email: "visitor@aztrosys.com" }, // We use a dummy email for the test user
      update: {}, // If exists, do nothing
      create: {
        id: userId,
        email: "visitor@aztrosys.com",
        name: "Website Visitor"
      }
    });
    // --- FIX END ---

    // 1. Save User's Message to DB
    await prisma.message.create({
      data: {
        content: message,
        role: 'user',
        userId: userId,
      },
    });

    // 2. Fetch Chat History (Limit to last 10 for context)
    const history = await prisma.message.findMany({
      where: { userId: userId },
      orderBy: { createdAt: 'asc' },
      take: 10,
    });

    // Format for Python
    const formattedHistory = history.map((msg) => ({
      role: msg.role,
      content: msg.content,
    }));

    // 3. Call Python Microservice
    const pyResponse = await fetch('http://127.0.0.1:8000/chat', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        user_id: userId,
        message: message,
        platform: "web_app",
        chat_history: formattedHistory
      }),
    });

    if (!pyResponse.ok) {
      console.error("Python API Error:", pyResponse.statusText);
      return new NextResponse("AI Engine Unavailable", { status: 503 });
    }

    const aiData = await pyResponse.json();

    // 4. Save AI Response to DB
    await prisma.message.create({
      data: {
        content: aiData.response_text,
        role: 'assistant',
        userId: userId,
      },
    });

    return NextResponse.json(aiData);

  } catch (error) {
    console.error("API Error:", error);
    return new NextResponse("Internal Server Error", { status: 500 });
  }
}