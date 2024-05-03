import { Footer } from "../../../components/headerFooterContent/Footer";
import Header from "../../../components/headerFooterContent/Header";
import { RootLayoutProps } from "../interface";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      {children}
      <Footer />
    </>
  );
};
export default RootLayout;
