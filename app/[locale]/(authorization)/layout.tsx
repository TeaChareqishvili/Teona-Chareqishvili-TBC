import { Footer } from "../../../components/headerFooterContent/Footer";
import Header from "../../../components/headerFooterContent/Header";
import { RootLayoutProps } from "../interface";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default RootLayout;
