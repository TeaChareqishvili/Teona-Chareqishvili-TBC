import { NextResponse } from "next/server";
import { AUTH_COOKIE_KEY } from "./app/contants";
import { cookies } from "next/headers";

export function middleware(request) {
  const cookieStore = cookies().get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;

  if (!cookieStore?.value && !pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/logIn", request.url));
  }

  if (cookieStore?.value && pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  // return NextResponse.next();
}

export const config = {
  matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
};
