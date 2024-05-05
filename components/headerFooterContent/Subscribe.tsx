"use client";
import { useScopedI18n } from "../../locales/client";

const Subscribe = () => {
  const scopedT = useScopedI18n("footer");

  return (
    <div className="w-full bg-[#e0e5e2] py-[70px] px-[60px] flex flex-col items-center justify-center">
      <h3 className="text-[24px] uppercase text-[#4a4f4a] mb-[15px] mt-[30px] tracking-wider">
        {" "}
        {scopedT("subscribe")}
      </h3>
      <p className="text-[20px] uppercase text-[#4a4f4a] mb-[15px] tracking-wider">
        {" "}
        {scopedT("sale")}
      </p>
      <div className="flex flex-col items-center justify-center">
        <label>
          <input
            className="w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            type="email"
            placeholder={scopedT("email")}
          />
        </label>
        <button className="mt-[20px] uppercase text-[#8a8d8a] tracking-widest bg-transparent border border-[#8a8d8a] cursor-pointer py-[8px] px-[15px]">
          {scopedT("button")}
        </button>
      </div>
    </div>
  );
};

export { Subscribe };
