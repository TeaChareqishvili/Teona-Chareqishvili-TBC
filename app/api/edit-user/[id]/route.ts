import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");

  if (!id) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const { name } = await request.json();

  if (!name) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    const result = await sql`
      UPDATE authousers
      SET name = ${name}
      WHERE id = ${id};
    `;

    if (result.rowCount === 0) {
      throw new Error("No rows updated");
    }

    const users = await sql`SELECT * FROM authousers`;
    return NextResponse.json({ users }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
