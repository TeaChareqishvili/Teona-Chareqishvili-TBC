import { AUTH_COOKIE_KEY } from "../../[locale]/contants";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export async function POST(request: NextRequest) {
  const { username, password } = await request.json();
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const cookieStore = cookies();
  const user = await response.json();

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));

  return Response.json({ username, password });
}
