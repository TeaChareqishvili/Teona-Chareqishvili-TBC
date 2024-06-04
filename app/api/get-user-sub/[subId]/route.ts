import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

export const revalidate = 0;

export async function GET(
  _: NextRequest,
  { params: { subId } }: { params: { subId: string } }
) {
  try {
    const users =
      await sql`SELECT serial_id FROM authousers WHERE id = ${subId}`;

    const usersId = users.rows.length > 0 ? users.rows[0].serial_id : null;

    return NextResponse.json({ usersId }, { status: 200 });
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }
}
