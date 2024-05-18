"use client";
import aboutImg from "../../public/assets/image/home/about.jpg";
import Image from "next/image";
import { useScopedI18n } from "../../locales/client";

const AboutUs = () => {
  const scopedT = useScopedI18n("aboutUs");
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-2/4 h-[500px]">
        <Image className="w-full h-full" src={aboutImg} alt="plant" />
      </div>
      <div className="w-2/4 flex flex-col items-center justify-start p-[20px]">
        <h3 className="text-[#747775] text-[26px] underline mb-[15px]">
          {scopedT("about")}
        </h3>
        <p className="text-[#747775] w-[400px] tracking-widest italic">
          {scopedT("lorem")}
        </p>
      </div>
    </div>
  );
};

export { AboutUs };
