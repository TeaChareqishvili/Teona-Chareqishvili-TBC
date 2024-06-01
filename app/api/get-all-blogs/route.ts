import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET() {
  try {
    const blogs = await sql`
      SELECT id, title,  date, category, image_url 
      FROM blogs 
      ORDER BY id ASC;
    `;
    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error fetching blogs:", error);
    return NextResponse.json({ error: "Unknown error" }, { status: 500 });
  }
}
