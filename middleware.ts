import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { AUTH_COOKIE_KEY } from "./app/contants";

export default async function middleware(request: NextRequest) {
  const cookieStore = request.cookies;
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);
  const { pathname } = request.nextUrl;

  if (!cookie?.value && !pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/logIn", request.url));
  }

  if (cookie?.value && pathname.startsWith("/logIn")) {
    return NextResponse.redirect(new URL("/", request.url));
  }

  const I18nMiddleware = createI18nMiddleware({
    locales: ["en", "ge"],
    defaultLocale: "en",
    urlMappingStrategy: "rewrite",
  });

  const response = I18nMiddleware(request);

  return response;
}

export const config = {
  matcher: [
    "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt).*)",
  ],
};
