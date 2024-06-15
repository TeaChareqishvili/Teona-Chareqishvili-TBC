import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function GET(
  _: NextRequest,
  { params: { id } }: { params: { id: string } }
) {
  try {
    // Fetch user data from the database
    const result =
      await sql`SELECT name, serial_id, email, phone_number, address FROM authousers WHERE serial_id = ${id}`;

    // Handle case where no user is found
    if (result.rows.length === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Extract user data
    const user = result.rows[0];

    return NextResponse.json({ user }, { status: 200 });
  } catch (error) {
    console.error("Database query error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
