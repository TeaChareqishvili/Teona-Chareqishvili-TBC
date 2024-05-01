"use client";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import { NavigationProps } from "@/app/[locale]/interface";

const LangButton = ({ marginBottom }: NavigationProps) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeLang = () => {
    const newLocale = locale === "en" ? "ge" : "en";
    changeLocale(newLocale);
    console.log("lang");
  };
  return (
    <>
      <div>
        <button
          style={{ marginBottom: marginBottom }}
          onClick={handleChangeLang}
          className=" w-[100px] border-double border hover:scale-125 border-[#111827] text-[#111827] dark:border-[#70cbcb] rounded-md cursor: pointer bg-green font-lg dark:text-[#70cbcb] py-[6px] px-[12px] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff] transition duration-700"
        >
          {locale === "en" ? "ge" : "en"}
        </button>
      </div>
    </>
  );
};

export { LangButton };
