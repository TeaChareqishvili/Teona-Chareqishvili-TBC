import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  // Extract the product id
  const id = request.nextUrl.pathname.replace("/api/edit-product/", "");

  if (!id || isNaN(Number(id))) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  // get  product data
  const { title, description, stock, price, sale, imageurl, category } =
    await request.json();

  if (
    !title ||
    !description ||
    !stock ||
    !price ||
    !sale ||
    !category ||
    !imageurl
  ) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    await sql`
      UPDATE shop
      SET title = ${title}, description = ${description}, stock = ${stock}, price = ${price}, sale= ${sale}, category = ${category}, imageurl = ${imageurl}
      WHERE id = ${Number(id)};
    `;

    const products = await sql`SELECT * FROM shop`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
