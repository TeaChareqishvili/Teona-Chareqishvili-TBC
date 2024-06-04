import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";

export const revalidate = 0;

export async function GET(
  _request: Request,
  { params }: { params: { id: string } }
) {
  try {
    const { id } = params;

    if (!id) {
      throw new Error("User ID is required");
    }

    const carts = await sql`SELECT * FROM cart WHERE user_id = ${Number(id)}`;

    return NextResponse.json({ carts }, { status: 200 });
  } catch (error: any) {
    console.error("Error fetching carts:", error.message);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}

// export async function POST(request: Request) {
//   const { name, email, age, isAdmin } = await request.json();

//   try {
//     if (!name || !email || !age) throw new Error('name, email, and age are required');

//     // Insert user into the users table
//     await sql`
//       INSERT INTO users (name, email, age, isAdmin)
//       VALUES (${name}, ${email}, ${age}, ${isAdmin});
//     `;

//     const users = await sql`SELECT id FROM users ORDER BY id DESC LIMIT 1;`;
//     const id = users.rows[0].id;

//     await sql`
//       INSERT INTO carts (user_id, products)
//       VALUES (${id}, '{}');
//     `;

//   } catch (error) {
//     return NextResponse.json({ error }, { status: 500 });
//   }

//   // Fetch all users from the database
//   const allUsers = await sql`SELECT * FROM users;`;

//   return NextResponse.json({ users: allUsers }, { status: 200 });

// }
