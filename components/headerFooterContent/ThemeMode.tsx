"use client";

import { FiSun, FiMoon } from "react-icons/fi";
import { useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function ThemeSwitch() {
  const [mounted, setMounted] = useState(false);
  const { setTheme, resolvedTheme } = useTheme();

  useEffect(() => setMounted(true), []);

  if (!mounted) return <span className="w-[25px]"></span>;

  if (resolvedTheme === "dark") {
    return (
      <FiSun
        className="lg:w-[20px] lg:h-[20px] cursor-pointer text-[#ffffff] dark:text-[#ffffff] dark:hover:text-[#748D92]  "
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="cursor-pointer text-[#ffffff] dark:text-[#ffffff] dark:hover:text-[#748D92] lg:w-[20px] lg:h-[20px] "
        onClick={() => setTheme("dark")}
      />
    );
  }
}
