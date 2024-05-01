// import { NextResponse } from "next/server";
// import { AUTH_COOKIE_KEY } from "./app/[locale]/contants";
// import { cookies } from "next/headers";
// import { NextRequest } from "next/server";

// export function middleware(request: NextRequest) {
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(AUTH_COOKIE_KEY);
//   const { pathname } = request.nextUrl;
//   console.log("tea");

//   if (!cookie?.value && !pathname.startsWith("/logIn")) {
//     return NextResponse.redirect(new URL("/logIn", request.url));
//   }

//   if (cookie?.value && pathname.startsWith("/logIn")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
// };

// pages/_middleware.ts
// import { NextRequest } from "next/server";
// import { chainMiddleware } from "./middlewares/chain";

// export function middleware(request: NextRequest) {
//   return chainMiddleware(request);
// }

// export const config = {
//   matcher: ["/((?!api|_next/static|_next/image|images|favicon.ico).*)"],
// };

// import { NextResponse } from "next/server";
// import { AUTH_COOKIE_KEY } from "./app/[locale]/contants";
// import { cookies } from "next/headers";
// import { NextRequest } from "next/server";
// import { createI18nMiddleware } from "next-international/middleware";

// const I18nMiddleware = createI18nMiddleware({
//   locales: ["en", "fr"],
//   defaultLocale: "en",
// });

// export function middleware(request: NextRequest) {
//   // Authorization middleware
//   const cookieStore = cookies();
//   const cookie = cookieStore.get(AUTH_COOKIE_KEY);
//   const { pathname } = request.nextUrl;

//   if (!cookie?.value && !pathname.startsWith("/logIn")) {
//     return NextResponse.redirect(new URL("/logIn", request.url));
//   }

//   if (cookie?.value && pathname.startsWith("/logIn")) {
//     return NextResponse.redirect(new URL("/", request.url));
//   }

//   // Internationalization middleware
//   return I18nMiddleware(request);
// }

// export const config = {
//   matcher: ["/((?!api|static|.*\\..*|_next|favicon.ico|robots.txt).*)"],
// };

// import { NextRequest } from "next/server";
// import { chain } from "./middlewares/chain";
// import { auth } from "./middlewares/authorization";
// import { internationalizationMiddleware } from "./middlewares/internationalization";

// export function Middleware(request: NextRequest) {
//   return chain([internationalizationMiddleware, auth])(request);
// }

// export const config = {
//   matcher: [
//     "/((?!api|_next/static|_next/image|images|favicon.ico|robots.txt).*)",
//   ],
// };

import { NextRequest, NextResponse } from "next/server";
import { createI18nMiddleware } from "next-international/middleware";
import { AUTH_COOKIE_KEY } from "./app/[locale]/contants";

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
