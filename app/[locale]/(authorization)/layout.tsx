import Header from "../../../components/headerFooterContent/Header";
import { RootLayoutProps } from "../interface";
import { Footer } from "@/components/headerFooterContent/Footer";

const RootLayout: React.FC<RootLayoutProps> = async ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
