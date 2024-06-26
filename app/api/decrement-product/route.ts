import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

type Products = {
  [key: string]: number;
};

export async function PUT(req: NextRequest) {
  try {
    const { userId, productId, quantity } = await req.json();

    // Fetch existing cart data from the server
    const result = await sql`
      SELECT shop FROM cart
      WHERE user_id = ${Number(userId)}
    `;

    let products: Products = {};

    if (result.rowCount > 0) {
      products = result.rows[0].shop || {};
    }

    // Decrement the quantity if the product already exists in the cart
    if (products[productId]) {
      products[productId] -= quantity;

      // If the product quantity goes below 1, remove it from the cart
      if (products[productId] <= 0) {
        delete products[productId];
      }
    }

    // Update the cart in the database
    const updatedCart = await sql`
      UPDATE cart
      SET shop = ${JSON.stringify(products)}::jsonb
      WHERE user_id = ${Number(userId)}
      RETURNING *
    `;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    console.error("PUT Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
