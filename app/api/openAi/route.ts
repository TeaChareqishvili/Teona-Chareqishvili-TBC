import { NextRequest, NextResponse } from "next/server";
import OpenAI from "openai";

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

export async function POST(req: NextRequest) {
  try {
    const { prompt } = await req.json();

    if (!prompt) {
      return NextResponse.json(
        { message: "Prompt is required" },
        { status: 400 }
      );
    }

    const completion = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [{ role: "user", content: prompt }],
    });

    return NextResponse.json(completion, { status: 200 });
  } catch (error) {
    if (error instanceof OpenAI.APIError) {
      console.error(
        "API error:",
        error.status,
        error.message,
        error.code,
        error.type
      );
      return NextResponse.json(
        { message: error.message, code: error.code, type: error.type },
        { status: error.status }
      );
    } else {
      console.error("Non-API error:", error);
      return NextResponse.json(
        { message: "Internal server error", error: " error.message" },
        { status: 500 }
      );
    }
  }
}
