import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../contants";

export async function logout() {
  const cookieStore = cookies();
  cookieStore.delete(AUTH_COOKIE_KEY);
}
