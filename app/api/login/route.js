import { AUTH_COOKIE_KEY } from "../../contants";
import { cookies } from "next/headers";

export async function POST(request) {
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
  console.log(user, "resyy");
  console.log(user.token);

  return Response.json({ username, password });
}
