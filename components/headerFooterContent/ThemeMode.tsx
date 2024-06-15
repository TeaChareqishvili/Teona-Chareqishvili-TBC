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
        className="lg:w-[20px] lg:h-[20px] cursor-pointer dark:hover:text-[#70cbcb] transition duration-200 mr-[6px]"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="cursor-pointer dark:hover:text-[#70cbcb] transition duration-200 lg:w-[20px] lg:h-[20px] mr-[6px]"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
