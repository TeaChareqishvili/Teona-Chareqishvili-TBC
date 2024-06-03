import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function DELETE(req: NextRequest) {
  try {
    const { userId, productId } = await req.json();

    // Fetch existing cart data from the database
    const result = await sql`
      SELECT shop FROM carts
      WHERE user_id = ${Number(userId)}
    `;

    // Ensure products is a proper object
    if (typeof result.rows[0].shop === "string") {
      result.rows[0].shop = JSON.parse(result.rows[0].shop);
    }

    // Remove the product from the cart
    if (result.rows[0].shop[productId]) {
      delete result.rows[0].shop[productId];
    }

    // Update the cart in the database
    const updatedCart = await sql`
      UPDATE carts
      SET shop = ${JSON.stringify(result.rows[0].shop)}::jsonb
      WHERE user_id = ${Number(userId)}
      RETURNING *
    `;

    return NextResponse.json({ updatedCart }, { status: 200 });
  } catch (error) {
    console.error("DELETE Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
