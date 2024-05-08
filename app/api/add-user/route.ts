import { sql } from "@vercel/postgres";
import { NextResponse } from "next/server";
// import { revalidatePath } from "next/cache";

export async function POST(request: Request) {
  //   const { searchParams } = new URL(request.url);
  //   const name = searchParams.get("name");
  //   const email = searchParams.get("email");
  //   const age = searchParams.get("age");
  const { name, email, age } = await request.json();
  try {
    if (!name || !email || !age)
      throw new Error(" names, email and age is required");
    await sql`INSERT INTO users (name, email,age) VALUES (${name}, ${email}, ${age});`;
  } catch (error) {
    return NextResponse.json({ error }, { status: 500 });
  }

  const users = await sql`SELECT * FROM users;`;
  //   revalidatePath("/users");
  return NextResponse.json({ users }, { status: 200 });
}
