import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request: Request) {
  try {
    const { title, description, image_url, category } = await request.json();

    if (!title || !description || !image_url || !category) {
      throw new Error(
        "Title, description, image_url, and category are required"
      );
    }

    await sql`
      INSERT INTO blogs (title, description, image_url, category, date)
      VALUES (${title}, ${description}, ${image_url}, ${category}, NOW())
    `;

    const blogs = await sql`SELECT * FROM blogs;`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during database operation:", error);
    return NextResponse.json({ error: "error.message" }, { status: 500 });
  }
}
