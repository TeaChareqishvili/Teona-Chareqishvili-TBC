"use client";
import { useScopedI18n } from "../../locales/client";
import Link from "next/link";
import { NavigationProps } from "../../app/[locale]/interface";
import { useUser } from "@auth0/nextjs-auth0/client";

const Navigation: React.FC<NavigationProps> = ({
  flexDirection,
  alignItems,
  marginBottom,
  marginLeft,
  display,
  color,
  fontSize,
}) => {
  const { user } = useUser();

  const isAdmin = Array.isArray(user?.role) && user.role.includes("admin");

  const scopedT = useScopedI18n("navigation");
  return (
    <nav style={{ display: display }}>
      <ul
        className="flex items-center ul-blur"
        style={{
          flexDirection: flexDirection,
          alignItems: alignItems,
        }}
      >
        <Link
          href="/"
          className="navigation text-sm md:text-base lg:text-lg xl:text-xl  text-white  uppercase cursor-pointer dark:text-white "
          style={{
            marginBottom: marginBottom,
            marginLeft: marginLeft,
            color: color,
            fontSize: fontSize,
          }}
        >
          <li
            className="font-tbc-helvetica-bold"
            style={{ fontSize: fontSize }}
          >
            {scopedT("home")}
          </li>
        </Link>{" "}
        <Link
          href="/ProductVercel"
          className="navigation text-sm md:text-base lg:text-lg xl:text-xl  text-white  uppercase cursor-pointer dark:text-white "
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
            {scopedT("product")}
          </li>
        </Link>
        <Link
          href="/blog"
          className="navigation text-sm md:text-base lg:text-lg xl:text-xl  text-white  uppercase cursor-pointer dark:text-white"
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
            {scopedT("blog")}
          </li>
        </Link>
        <Link
          href="/contact"
          className=" navigation text-sm md:text-base lg:text-lg xl:text-xl  text-white  uppercase cursor-pointer dark:text-[white]"
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
            {scopedT("contact")}
          </li>
        </Link>
        {isAdmin && (
          <Link
            href="/admin"
            className="navigation text-sm md:text-base lg:text-lg xl:text-xl  text-white  uppercase cursor-pointer dark:text-white "
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
              {scopedT("admin")}
            </li>
          </Link>
        )}
      </ul>
    </nav>
  );
};

export { Navigation };
