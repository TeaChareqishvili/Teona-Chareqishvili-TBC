import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  // Extract the blog id
  const id = request.nextUrl.pathname.replace("/api/edit-blog/", "");

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  // get  blog data
  const { title, description, category, image_url } = await request.json();

  if (!title || !description || !category || !image_url) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    await sql`
      UPDATE blogs
      SET title = ${title}, description = ${description}, category = ${category}, image_url = ${image_url}
      WHERE id = ${Number(id)};
    `;

    const blogs = await sql`SELECT * FROM blogs`;

    return NextResponse.json({ blogs }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
