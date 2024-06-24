import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
export const revalidate = 0;
export async function POST(request: Request) {
  try {
    const { user_id, product_id, comment, main_photo, rating } =
      await request.json();
    console.log(comment, "routecomment");
    await sql`
    INSERT INTO products_review (
      user_id, product_id, comment, main_photo, rating
    ) VALUES (
      ${user_id}, ${product_id}, ${comment}, ${main_photo}, ${rating})
    `;

    const products = await sql`SELECT * FROM products_review`;

    return NextResponse.json({ products }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
