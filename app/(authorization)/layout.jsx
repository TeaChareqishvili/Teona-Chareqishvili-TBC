import { Footer } from "../../components/headerFooterContent/Footer";
import { Header } from "../../components/headerFooterContent/Header";
import { cookies } from "next/headers";
import { AUTH_COOKIE_KEY } from "../contants";
import { redirect } from "next/navigation";

export default function RootLayout({ children }) {
  const cookieStore = cookies();
  const cookie = cookieStore.get(AUTH_COOKIE_KEY);

  if (cookie) {
    redirect("/login");
  }

  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
