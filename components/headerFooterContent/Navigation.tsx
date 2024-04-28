import { useTranslation } from "react-i18next";
import Link from "next/link";
import { NavigationProps } from "../../app/interface";

const Navigation: React.FC<NavigationProps> = ({
  flexDirection,
  alignItems,
  marginBottom,
  marginLeft,
  display,
  color,
  fontSize,
}) => {
  const { t } = useTranslation();
  return (
    <nav style={{ display: display }}>
      <ul
        className="flex items-center"
        style={{
          flexDirection: flexDirection,
          alignItems: alignItems,
        }}
      >
        <Link
          href="/"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#111827] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#70cbcb] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#70cbcb]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {t("home")}
          </li>
        </Link>{" "}
        <Link
          href="/blog"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#111827] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#70cbcb] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#70cbcb]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {t("blog")}
          </li>
        </Link>
        <Link
          href="/contact"
          className="text-sm md:text-base lg:text-lg xl:text-xl  text-[#111827] font-bold uppercase cursor-pointer transition all duration-300 transform hover:text-[#70cbcb] hover:scale-105 dark:text-[#ffffff] dark:hover:text-[#70cbcb]"
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {t("contact")}
          </li>
        </Link>
      </ul>
    </nav>
  );
};

export { Navigation };
