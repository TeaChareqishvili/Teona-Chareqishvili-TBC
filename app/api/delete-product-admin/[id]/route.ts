// import { sql } from "@vercel/postgres";
// import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(request: NextRequest) {
//   const id = request.nextUrl.pathname.replace("/api/delete-product-admin/", "");

//   try {
//     if (!id) throw new Error("ID is required");

//     await sql`DELETE FROM shop WHERE id = ${Number(id)};`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const shop = await sql`SELECT * FROM shop;`;

//   return NextResponse.json({ shop }, { status: 200 });
// }

import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-product-admin/", "");

  try {
    if (!id) throw new Error("ID is required");

    // Start a transaction
    await sql`BEGIN`;

    try {
      // Delete the product from the shop table
      await sql`DELETE FROM shop WHERE id = ${Number(id)}`;

      // Fetch all carts that contain the product
      const { rows: carts } =
        await sql`SELECT * FROM cart WHERE shop::jsonb ? ${id}`;

      // Update the shop object in each cart
      for (const cart of carts) {
        const shop = JSON.parse(cart.shop);
        delete shop[id];
        await sql`UPDATE cart SET shop = ${sql.json(shop)} WHERE id = ${
          cart.id
        }`;
      }

      // Commit the transaction
      await sql`COMMIT`;
    } catch (error) {
      // Rollback the transaction in case of error
      await sql`ROLLBACK`;
      throw error;
    }

    // Fetch the updated shop table
    const { rows: shop } = await sql`SELECT * FROM shop;`;

    return NextResponse.json({ shop }, { status: 200 });
  } catch (error) {
    console.error("Error occurred during database operation:", error);
    return NextResponse.json({ error: " error.message " }, { status: 500 });
  }
}
