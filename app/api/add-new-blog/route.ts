import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function POST(request: Request) {
  try {
    const { title, description, image_url, category } = await request.json();

    // Log the received data to verify the request payload
    console.log({ title, description, image_url, category });

    if (!title || !description || !image_url || !category) {
      throw new Error(
        "Title, description, image_url, and category are required"
      );
    }

    // Log before inserting into the database
    console.log("Inserting into the database...");
    await sql`
      INSERT INTO blogs (title, description, image_url, category, date)
      VALUES (${title}, ${description}, ${image_url}, ${category}, NOW())
    `;
    console.log("Insertion successful");

    // Log before selecting from the database
    console.log("Fetching all blogs...");
    const blogs = await sql`SELECT * FROM blogs;`;
    console.log("Fetch successful", blogs);

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during database operation:", error); // Log the detailed error message
    return NextResponse.json({ error: "error.message" }, { status: 500 });
  }
}
