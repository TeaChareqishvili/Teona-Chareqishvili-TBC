import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const {
      title,
      description,
      stock,
      price,
      sale,
      imageurl,
      category,
      image_gallery,
    } = await request.json();

    if (
      !title ||
      !description ||
      !stock ||
      !price ||
      !sale ||
      !imageurl ||
      !category ||
      !image_gallery
    ) {
      throw new Error(
        "Title, description, stock, price, sale, imageurl, category, and image_gallery are required"
      );
    }

    // Serialize the image_gallery array to JSON string
    const image_gallery_json = JSON.stringify(image_gallery);

    await sql`
      INSERT INTO shop (title, description, stock, price, sale, imageurl, category, image_gallery)
      VALUES (${title}, ${description}, ${stock}, ${price}, ${sale}, ${imageurl}, ${category}, ${image_gallery_json})
    `;

    const products = await sql`SELECT * FROM shop`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during database operation:", error);
    return NextResponse.json({ error: "error.message " }, { status: 500 });
  }
}
