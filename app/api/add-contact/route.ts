import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const body = await request.json();
  const { name, email, phone, message } = body;

  try {
    if (!name || !email || !phone || !message) {
      throw new Error("Name, email, phone, and message are required");
    }

    await sql`
      INSERT INTO contact (name, email, phone, message)
      VALUES (${name}, ${email}, ${phone}, ${message});
    `;

    const contacts = await sql`SELECT * FROM contact;`;

    return NextResponse.json({ contacts }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error: "error message" }, { status: 500 });
  }
}
