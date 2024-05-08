import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export async function DELETE(request: Request) {
  const { id } = await request.json();
  try {
    if (!id) throw new Error("id is requered");

    await sql` DELETE FROM users WHERE id = ${id}`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
  const users = await sql`SELECT * FROM users`;
  return NextResponse.json({ users }, { status: 200 });
}
