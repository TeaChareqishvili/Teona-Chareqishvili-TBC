import Providers from "./providers";
import "./globals.css";
import React, { ReactElement } from "react";
import { I18nProviderClient } from "../../locales/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

interface RootLayoutProps {
  params: {
    locale: string;
  };
  children: ReactElement;
}

const RootLayout: React.FC<RootLayoutProps> = ({
  params: { locale },
  children,
}: RootLayoutProps) => {
  return (
    <html lang={locale} suppressHydrationWarning>
      {" "}
      <body className="w-full min-h-screen bg-[#ffffff]  flex  flex-col item-center justify-center transition-colors duration-700">
        <I18nProviderClient locale={locale}>
          <Providers>
            <UserProvider>
              {children}
            </UserProvider>
          </Providers>
        </I18nProviderClient>
      </body>
    </html>
  );
};

export default RootLayout;
