import Providers from "./providers";
import "./globals.css";
import { RootLayoutProps } from "../app/interface";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

const RootLayout: React.FC<RootLayoutProps> = ({ children }) => {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="w-full h-full bg-[#ffffff] dark:bg-[#0C1B31] flex item-center justify-center transition-colors duration-700">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
};

export default RootLayout;
