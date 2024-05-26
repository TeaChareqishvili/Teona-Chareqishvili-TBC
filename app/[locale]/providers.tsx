"use client";

import { ThemeProvider } from "next-themes";
import { useEffect } from "react";
import { useTheme } from "next-themes";
import { RootLayoutProps } from "./interface";

const Providers: React.FC<RootLayoutProps> = ({ children }) => {
  const { theme } = useTheme();

  useEffect(() => {}, [theme]);

  return (
    <ThemeProvider attribute="class" defaultTheme="system" enableSystem={true}>
      {children}
    </ThemeProvider>
  );
};
export default Providers;
