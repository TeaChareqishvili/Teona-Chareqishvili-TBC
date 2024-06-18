import Providers from "./providers";
import "./globals.css";
import React, { ReactElement } from "react";
import { I18nProviderClient } from "../../locales/client";
import { UserProvider } from "@auth0/nextjs-auth0/client";

export const metadata = {
  title: "Vitality Zone",
  description:
    "Vitality Zone: Your ultimate destination for fitness, health, and wellness. Discover expert tips, workout routines, and nutritious recipes to help you live your best life.",
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
      <body className="w-full min-h-screen bg-[#D3D9D4]  dark:bg-[#212A31] flex  flex-col item-center justify-center transition-colors duration-700">
        <UserProvider>
          <I18nProviderClient locale={locale}>
            <Providers>{children}</Providers>
          </I18nProviderClient>
        </UserProvider>
      </body>
    </html>
  );
};

export default RootLayout;
