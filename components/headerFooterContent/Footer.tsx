"use client";

import { SocialLinks } from "./SocialLinks";
import logo from "../../public/assets/image/next.webp";
import { Navigation } from "./Navigation";
import Link from "next/link";
import Image from "next/image";
import { useScopedI18n } from "../../locales/client";

const Footer = () => {
  const scopedT = useScopedI18n("footer");
  return (
    <footer className="w-full bg-gray-900 py-8 px-5 mt-5 flex items-center justify-center flex-col border-t-2 border-gray-700">
      <div className="md:w-full md:flex md:items-center md:justify-center md:flex-col lg:w-4/5 lg:mx-auto lg:flex-row lg:justify-between sm:justify-center sm:items-center sm:m-auto">
        <div>
          {" "}
          <h3 className="text-white text-2xl leading-1.3 mb-4 font-tbc-helvetica-bold">
            {scopedT("subscribe")}
          </h3>
          <p className="text-white text-base leading-6 mb-5 font-tbc-helvetica-roman">
            {scopedT("sale")}
          </p>
        </div>
        <div className="lg:mr-10 mt-8">
          <label>
            <input
              className="w-[clamp(275px,100%,400px)] h-12 outline-none text-[#25262b] font-tbc-helvetica-roman text-base border-none px-5 bg-white mb-4 .focus:border-solid.focus:border-2.focus:border-[#5d2d34]"
              type="email"
              placeholder={scopedT("email")}
            />
          </label>
          <button className="w-[275px] md:w-full max-w-[400px] px-4 py-5 border-none text-[#edeeee] bg-[#ff1f23] font-tbc-helvetica-roman cursor-pointer mb-4 font-case transition-all duration-400 .hover:bg-[#5d2d34]">
            {scopedT("button")}
          </button>
        </div>
        <SocialLinks />
      </div>
      <div className="w-4/5 bg-white h-0.5 my-6 mx-auto"></div>
      <div className="md:w-full md:flex md:items-center md:justify-center md:flex-col lg:w-4/5 lg:mx-auto lg:flex-row lg:justify-between">
        {" "}
        <Link href="/">
          {" "}
          <Image
            className="md:mb-5 lg:mb-0 w-[50px] h-[50px]"
            src={logo}
            alt="logo"
          />
        </Link>
        <Navigation
          color="#FFFFFF"
          marginBottom="7px"
          display="flex"
          marginLeft="30px"
        />
      </div>
      <div className="w-4/5 bg-[#ffffff] h-0.5 my-6 mx-auto"></div>
      <p className="text-base font-tbc-telegraf-light text-white tracking-wider mx-1">
        {scopedT("right")}
      </p>
    </footer>
  );
};

export { Footer };
