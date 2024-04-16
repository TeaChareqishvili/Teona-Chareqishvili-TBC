import { Footer } from "../../components/headerFooterContent/Footer";
import { Header } from "../../components/headerFooterContent/Header";

export default function Layout({ children }) {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
}
