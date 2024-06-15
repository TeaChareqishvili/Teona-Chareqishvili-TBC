import { NextRequest, NextResponse } from "next/server";
import { sql } from "@vercel/postgres";

export async function PUT(request: NextRequest) {
  const { id, nickname, phoneNumber, address } = await request.json();

  console.log(id, "routeprofile");
  console.log(nickname, "routeprofile");
  console.log(phoneNumber, "routeprofile");
  if (!id || !nickname || !phoneNumber || !address) {
    return NextResponse.json({ error: "Invalid input data" }, { status: 400 });
  }

  try {
    const result = await sql`
      UPDATE authousers
      SET name = ${nickname}, phone_number = ${phoneNumber}, address = ${address}
      WHERE serial_id = ${id};
    `;

    if (result.rowCount === 0) {
      throw new Error("No rows updated");
    }

    const updatedUser =
      await sql`SELECT * FROM authousers WHERE serial_id = ${id}`;
    return NextResponse.json({ user: updatedUser.rows[0] }, { status: 200 });
  } catch (error) {
    console.error("Error updating user:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 }
    );
  }
}
