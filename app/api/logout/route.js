import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../../contants";

export async function POST() {
  cookies().delete(AUTH_COOKIE_KEY);
  return Response.json({ message: "success" });
}
