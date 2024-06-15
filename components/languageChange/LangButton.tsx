"use client";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import { NavigationProps } from "@/app/[locale]/interface";

const LangButton = ({ marginBottom }: NavigationProps) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  const handleChangeLang = async () => {
    const newLocale = locale === "en" ? "ge" : "en";
    changeLocale(newLocale);
  };
  return (
    <>
      <div className="mr-[7px]">
        <button
          style={{ marginBottom: marginBottom }}
          onClick={handleChangeLang}
          className=" text-[#111827]  cursor: pointer bg-green lg:text-[15px] dark:text-[#ffffff]   dark:hover:text-[#70cbcb] transition duration-200"
        >
          {locale === "en" ? "GE" : "EN"}
        </button>
      </div>
    </>
  );
};

export { LangButton };
