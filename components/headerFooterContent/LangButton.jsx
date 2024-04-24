import i18n from "../../app/i18n";
import { useTranslation } from "react-i18next";
import { useState } from "react";

const LangButton = ({ marginBottom }) => {
  const { t, i18n: translation } = useTranslation();
  const currentLanguage = translation.language;
  const [lang, setLang] = useState(localStorage.getItem("language") || "en");

  // function to toggle the language
  const chooseLanguage = () => {
    const nextLanguage = currentLanguage === "en" ? "ge" : "en";
    translation.changeLanguage(nextLanguage);
    localStorage.setItem("language", nextLanguage);
    setLang(nextLanguage);
  };
  return (
    <>
      <div>
        <button
          style={{ marginBottom: marginBottom }}
          className="w-[100px] border  border-[#70cbcb] cursor-pointer p-[5px] rounded-md"
          onClick={chooseLanguage}
        >
          {translation.language === "en" ? "ge" : "en"}{" "}
        </button>
      </div>
    </>
  );
};

export { LangButton };
