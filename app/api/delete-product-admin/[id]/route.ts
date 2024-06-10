import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/delete-product-admin/", "");

  try {
    if (!id) throw new Error("ID is required");

    await sql`DELETE FROM shop WHERE id = ${Number(id)};`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const shop = await sql`SELECT * FROM shop`;

  return NextResponse.json({ shop }, { status: 200 });
}

// import { sql } from "@vercel/postgres";
// import { NextRequest, NextResponse } from "next/server";

// export async function DELETE(request: NextRequest) {
//   const id = request.nextUrl.pathname.replace("/api/delete-product-admin/", "");

//   try {
//     if (!id) throw new Error("ID is required");

//     console.log("Starting transaction for product deletion with ID:", id);

//     // Start a transaction
//     await sql`BEGIN`;

//     try {
//       // Delete the product from the shop table
//       const deleteResult = await sql`DELETE FROM shop WHERE id = ${Number(id)}`;
//       console.log("Product deletion result:", deleteResult);

//       // Fetch all carts that contain the product
//       const { rows: carts } =
//         await sql`SELECT * FROM cart WHERE shop::jsonb ? ${id}`;
//       console.log("Carts containing the product:", carts);

//       // Update the shop object in each cart
//       for (const cart of carts) {
//         console.log("Processing cart ID:", cart.id);
//         const shop = JSON.parse(cart.shop);
//         console.log("Current shop object in cart:", shop);
//         delete shop[id];
//         console.log("Updated shop object in cart:", shop);
//         const updateResult = await sql`UPDATE cart SET shop = ${sql.json(
//           shop
//         )} WHERE id = ${cart.id}`;
//         console.log("Cart update result:", updateResult);
//       }

//       // Commit the transaction
//       await sql`COMMIT`;
//       console.log("Transaction committed successfully.");
//     } catch (error) {
//       // Rollback the transaction in case of error
//       await sql`ROLLBACK`;
//       console.error("Transaction rolled back due to error:", error);
//       throw error;
//     }

//     // Fetch the updated shop table
//     const { rows: shop } = await sql`SELECT * FROM shop`;
//     console.log("Updated shop table:", shop);

//     return NextResponse.json({ shop }, { status: 200 });
//   } catch (error) {
//     console.error("Error occurred during database operation:", error);
//     return NextResponse.json({ error: "error.message" }, { status: 500 });
//   }
// }
