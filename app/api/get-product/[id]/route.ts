import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/get-product/", "");

  try {
    const products = await sql`SELECT * FROM shop WHERE id = ${Number(id)}`;
    const reviews = await sql`
      SELECT 
        u.email, 
        u.serial_id, 
        r.rating, 
        r.comment, 
        r.product_id 
      FROM 
        products_review r 
      JOIN 
        authousers u 
      ON 
        u.id = r.user_id 
      WHERE 
        r.product_id = ${id}
    `;

    return NextResponse.json(
      { products: products.rows, reviews: reviews.rows },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
