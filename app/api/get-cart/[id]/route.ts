import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  request: Request,
  { params }: { params: { userId: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      throw new Error("User ID is required");
    }

    console.log("userId:", id);

    const carts = await sql`SELECT * FROM carts WHERE user_id = ${Number(id)}`;

    return NextResponse.json({ carts }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching carts:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
