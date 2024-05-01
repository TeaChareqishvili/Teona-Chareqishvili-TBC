import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./app/[locale]/contants";
import { cookies } from "next/headers";
import { NextRequest } from "next/server";

export function middleware(request: NextRequest) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;
  console.log("tea");

  if (!cookie?.value && !pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/logIn", request.url));
  }

  if (cookie?.value && pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
