"use client";
import { useChangeLocale, useCurrentLocale } from "../../locales/client";
import { NavigationProps } from "@/app/[locale]/interface";

const LangButton = ({ marginBottom }: NavigationProps) => {
  const changeLocale = useChangeLocale();
  const locale = useCurrentLocale();

  return (
    <>
      <div>
        <p>Current locale: {locale}</p>
        <button onClick={() => changeLocale("en")}>English</button>
        <button onClick={() => changeLocale("ge")}>Georgian</button>
      </div>
    </>
  );
};

export { LangButton };
