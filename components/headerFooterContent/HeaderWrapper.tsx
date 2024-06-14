"use client";
import React, { ReactElement, useEffect, useState } from "react";

export default function HeaderWrapper({
  children,
}: {
  children: ReactElement;
}) {
  const [isHidden, setIsHidden] = useState(false);
  const [lastScrollY, setLastScrollY] = useState(0);

  console.log(lastScrollY);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > lastScrollY && window.scrollY > 100) {
        setIsHidden(true);
      } else {
        setIsHidden(false);
      }
      setLastScrollY(window.scrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`w-full py-4 px-0 border-b z-20 border-[#ffffff] fixed top-0 left-0  transition-all duration-300 ${
        isHidden ? "hidden" : "bg-[#f4f6f3] dark:bg-[#264653]"
      }`}
    >
      {children}
    </div>
  );
}
