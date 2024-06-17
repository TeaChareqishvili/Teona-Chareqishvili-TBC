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
      <div className="">
        <button
          style={{ marginBottom: marginBottom }}
          onClick={handleChangeLang}
          className="  cursor: pointer  lg:text-[15px] text-[#ffffff] dark:text-[#ffffff] hover:text-[#748D92]   dark:hover:text-[#748D92] transition duration-200"
        >
          {locale === "en" ? "GE" : "EN"}
        </button>
      </div>
    </>
  );
};

export { LangButton };
