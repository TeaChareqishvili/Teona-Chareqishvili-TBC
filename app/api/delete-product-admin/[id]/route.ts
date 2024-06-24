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
