import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;
export async function GET() {
  try {
    const users =
      await sql`SELECT id, title, price, stock, category  FROM products ORDER BY id ASC;`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}