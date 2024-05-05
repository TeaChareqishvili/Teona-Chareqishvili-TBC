"use client";

import { Navigation } from "./Navigation";
import { SocialLinks } from "./SocialLinks";
import { useScopedI18n } from "../../locales/client";

const FooterNavigation = () => {
  const scopedT = useScopedI18n("footer");
  return (
    <div className="bg-[#ffffff] w-full flex flex-col items-center justify-center py-[50px] px-[30px] ">
      <div className="bg-[#ffffff] w-full flex items-center justify-between py-[20px] px-[30px] ">
        <div>
          <SocialLinks />
        </div>
        <div>
          <Navigation
            color="#4f6966"
            marginBottom="7px"
            display="flex"
            marginLeft="30px"
          />
        </div>
      </div>
      <div className="w-[300px] h-[1px] bg-[#4f6966] my-[20px] mx-auto">
        <p className="text-base font-tbc-telegraf-light text-[#4f6966] text-center tracking-wider mx-1 mt-[10px] pb-[20px]">
          {scopedT("right")}
        </p>
      </div>
    </div>
  );
};

export { FooterNavigation };
