import i18n from "../../app/i18n";
import { useTranslation } from "react-i18next";
// import { useState } from "react";
import { NavigationProps } from "@/app/interface";

const LangButton = ({ marginBottom }: NavigationProps) => {
  const { t, i18n: translation } = useTranslation();
  // const currentLanguage = translation.language;
  // const [lang, setLang] = useState(localStorage.getItem("language") || "en");

  // function to toggle the language
  const chooseLanguage = () => {
    const currentLanguage = i18n.language;
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    i18n.changeLanguage(nextLanguage);
    // localStorage.setItem("language", nextLanguage);
    // setLang(nextLanguage);
  };
  return (
    <>
      <div>
        <button
          style={{ marginBottom: marginBottom }}
          className=" w-[100px] border-double border hover:scale-125 border-[#111827] text-[#111827] dark:border-[#70cbcb] rounded-md cursor: pointer bg-green font-lg dark:text-[#70cbcb] py-[6px] px-[12px] dark:hover:border-[#ffffff] dark:hover:text-[#ffffff] transition duration-700 "
          onClick={chooseLanguage}
        >
          {translation.language === "en" ? "ge" : "en"}{" "}
        </button>
      </div>
    </>
  );
};

export { LangButton };
