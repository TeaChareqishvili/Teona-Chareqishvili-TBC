// app/api/edit-user/[id]/route.ts
import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const id = request.nextUrl.pathname.replace("/api/edit-user/", "");
  console.log("Received request to update user with ID:", id);

  if (!id) {
    return NextResponse.json({ error: "Invalid user ID" }, { status: 400 });
  }

  const { name } = await request.json();
  console.log("Parsed name:", name);

  if (!name) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    console.log("Updating user in the database...");
    const result = await sql`
      UPDATE authousers
      SET name = ${name}
      WHERE serial_id = ${id};
    `;

    if (result.rowCount === 0) {
      throw new Error("No rows updated");
    }

    console.log("User updated successfully, fetching updated users...");
    const users = await sql`SELECT * FROM authousers`;
    return NextResponse.json(users, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json({ error: "Error updating user" }, { status: 500 });
  }
}
