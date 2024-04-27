import { Footer } from "../../components/headerFooterContent/Footer";
import Header from "../../components/headerFooterContent/Header";

export default function RootLayout({ children }) {
  return (
    <>
      <div className="h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
}
