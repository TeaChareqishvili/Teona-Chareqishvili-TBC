"use client";
import { useScopedI18n } from "@/locales/client";
interface Props {
  fontSize: string;
  display: string;
}

export default function ContactData({ fontSize, display }: Props) {
  const t = useScopedI18n("footer");
  return (
    <>
      <div className="mt-4 text-center text-sm text-gray-300">
        <h2
          className="text-[white] text-[32px] mb-[20px]"
          style={{ fontSize: fontSize, display: display }}
        >
          {t("contact")}
        </h2>
        <p
          className="text-white cursor-pointer mb-[15px] lg:text-[22px] "
          style={{ fontSize: fontSize }}
        >
          {t("rustaveli")}
        </p>
        <p
          className="text-white cursor-pointer mb-[15px] lg:text-[22px] "
          style={{ fontSize: fontSize }}
        >
          {t("tbilisi")}
        </p>
        <p
          className="text-white  cursor-pointer mb-[15px] lg:text-[22px]"
          style={{ fontSize: fontSize }}
        >
          {t("email")}: contact@viatlityzone.com
        </p>
        <p
          className="text-white  cursor-pointer mb-[15px] lg:text-[22px]"
          style={{ fontSize: fontSize }}
        >
          {t("phone")}: (995) 599 557799
        </p>
      </div>
    </>
  );
}
