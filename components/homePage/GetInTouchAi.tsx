"use client";
import Link from "next/link";
import { BsRobot } from "react-icons/bs";
import { useScopedI18n } from "@/locales/client";

export default function GetInTouchAi() {
  const t = useScopedI18n("Ai");
  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center">
      <h3 className="text-shadow-drop-center text-[18px] px-[20px] text-center lg:px-0 md:text-[24px] dark:text-white lg:text-[32px] tracking-wide text-[#212A31]">
        {t("Ai")}
      </h3>

      <Link
        className="cursor-pointer flex items-center justify-center uppercase dark:text-white text-[15px] text-[#212A31]"
        href="/openAi"
      >
        {t("click")}
        <BsRobot className="dark:text-white text-[#212A31]" />
      </Link>
    </div>
  );
}
