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
        className="lg:w-7 lg:h-7 cursor-pointer hover:text-[#70cbcb] transition duration-200 hover:scale-125"
        onClick={() => setTheme("light")}
      />
    );
  }

  if (resolvedTheme === "light") {
    return (
      <FiMoon
        className="  cursor-pointer hover:text-[#70cbcb] transition duration-200 hover:scale-125 lg:w-7 lg:h-7"
        onClick={() => setTheme("dark")}
      />
    );
  }
}
