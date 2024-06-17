import { sql } from "@vercel/postgres";
import { NextRequest, NextResponse } from "next/server";

export async function DELETE(request: NextRequest) {
  // Extract ID from the URL path
  const id = request.nextUrl.pathname.replace("/api/delete-user/", "");

  try {
    // Validate if the ID is a non-empty string
    if (!id) throw new Error("Valid ID is required");

    // Check if the user exists before attempting to delete
    const { rowCount: userCount } =
      await sql`SELECT 1 FROM authousers WHERE id = ${id};`;
    if (userCount === 0) {
      return NextResponse.json({ error: "User not found" }, { status: 404 });
    }

    // Delete the user with the specified ID
    const { rowCount } = await sql`DELETE FROM authousers WHERE id = ${id};`;

    if (rowCount === 0) {
      throw new Error("Failed to delete user");
    }

    // Fetch all remaining users
    const users = await sql`SELECT * FROM authousers;`;

    return NextResponse.json({ users }, { status: 200 });
  } catch (error: any) {
    console.error("Error:", error.message || error);
    return NextResponse.json(
      { error: error.message || "Unknown error" },
      { status: 500 }
    );
  }
}

// import { sql } from '@vercel/postgres';
// import { NextRequest, NextResponse } from 'next/server';

// export async function DELETE(request: NextRequest) {
//   const id = request.nextUrl.pathname.replace('/api/delete-user/', '');

//   try {
//     if (!id) throw new Error('ID is required');

//     await sql`DELETE FROM users WHERE id = ${Number(id)};`;
//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   const users = await sql`SELECT * FROM users;`;

//   return NextResponse.json({ users }, { status: 200 });
// }
