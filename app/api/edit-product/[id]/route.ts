import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";
export const revalidate = 0;
export async function PUT(request: NextRequest) {
  // Extract the product id
  const id = request.nextUrl.pathname.replace("/api/edit-product/", "");

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid product ID" }, { status: 400 });
  }

  // Get product data
  const { title, description, price, sale, imageurl, category, image_gallery } =
    await request.json();

  if (
    !title ||
    !description ||
    !price ||
    !sale ||
    !category ||
    !imageurl ||
    !image_gallery
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    const image_gallery_json = JSON.stringify(image_gallery);

    await sql`
      UPDATE shop
      SET 
        title = ${title}, 
        description = ${description}, 
      
        price = ${price}, 
        sale = ${sale}, 
        category = ${category}, 
        imageurl = ${imageurl}, 
        image_gallery = ${image_gallery_json}
      WHERE id = ${Number(id)};
    `;

    const products = await sql`SELECT * FROM shop`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error updating product:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
