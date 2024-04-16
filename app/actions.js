import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "./contants";

export async function Userlogin(username, password) {
  "use server";
  const response = await fetch("https://dummyjson.com/auth/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      username,
      password,
    }),
  });

  const user = await response.json();
  const token = user.token;
  const cookieStore = cookies();

  cookieStore.set(AUTH_COOKIE_KEY, token);
  console.log(user, "res");
}
