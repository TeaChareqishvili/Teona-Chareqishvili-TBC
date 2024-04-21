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

  const cookieStore = cookies();
  const user = await response.json();

  cookieStore.set(AUTH_COOKIE_KEY, JSON.stringify(user.token));
  console.log(user, "resyy");
  console.log(user.token);
}

export async function logout() {
  "use server";
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
}
