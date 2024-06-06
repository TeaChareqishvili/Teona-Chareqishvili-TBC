import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const { title, description, stock, price, sale, imageurl, category } =
      await request.json();

    // Log the received data to verify the request payload
    console.log({ title, description, stock, price, sale, imageurl, category });

    if (
      !title ||
      !description ||
      !stock ||
      !price ||
      !sale ||
      !imageurl ||
      !category
    ) {
      throw new Error(
        "Title, description, image_url, and category are required"
      );
    }

    // Log before inserting into the database
    console.log("Inserting into the database...");
    await sql`
      INSERT INTO shop (title, description, stock, price, sale, imageurl, category)
      VALUES (${title}, ${description}, ${stock}, ${price}, ${sale}, ${imageurl}, ${category})
    `;
    console.log("Insertion successful");

    // Log before selecting from the database
    console.log("Fetching all products...");
    const products = await sql`SELECT * FROM shop`;
    console.log("Fetch successful", products);

    return NextResponse.json({ products }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during database operation:", error); // Log the detailed error message
    return NextResponse.json({ error: "error.message" }, { status: 500 });
  }
}
