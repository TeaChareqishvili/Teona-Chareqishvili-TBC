import { Footer } from "../../components/headerFooterContent/Footer";
import Header from "../../components/headerFooterContent/Header";
import { RootLayoutProps } from "../../app/interface";

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <>
      <div className="h-screen">
        <Header />
        {children}
        <Footer />
      </div>
    </>
  );
};
export default RootLayout;
