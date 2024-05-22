import { sql } from "@vercel/postgres";
import { NextResponse, NextRequest } from "next/server";

export async function DELETE(
  request: NextRequest,
  { params }: { params: { productId: string } }
) {
  try {
    const { productId } = params;
    console.log("Product ID:", productId);

    if (!productId) {
      throw new Error("Product ID is required");
    }

    // Extract userId from query parameters
    const userId = request.nextUrl.searchParams.get("userId");
    console.log("User ID:", userId);

    if (!userId) {
      throw new Error("User ID is required");
    }

    // Delete the product from the cart for the given userId
    await sql`
      DELETE FROM carts WHERE productId = ${Number(
        productId
      )} AND user_Id = ${Number(userId)};
    `;

    // Fetch the updated cart for the user
    const cart = await sql`
      SELECT * FROM carts WHERE user_Id = ${Number(userId)};
    `;

    return NextResponse.json({ cart: cart.rows }, { status: 200 });
  } catch (error) {
    console.error("Error deleting product:", error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
