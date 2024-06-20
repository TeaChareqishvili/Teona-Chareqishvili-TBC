"use client";
import { CgGym } from "react-icons/cg";
import { IoNutrition } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { PiHeartbeatFill } from "react-icons/pi";
import { useScopedI18n } from "@/locales/client";

export default function ChooseUs() {
  const t = useScopedI18n("chooseUs");
  return (
    <div className=" w-full  py-[30px] img flex flex-col items-center ">
      <h2 className="text-center text-[24px] md:text-[30px] lg:text-[34px] uppercase dark:text-[#ffffff] my-[25px]  ">
        {t("choose")}
      </h2>
      <div className="w-[95%] m-auto flex flex-col items-center justify-between  lg:flex-row ">
        <div className="w-[200px]  mb-[15px] flex  flex-col items-center justify-center shadow-lg bg-white opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200 md:w-[300px] md:text-[14px] lg:text-[15px] lg:w-unset">
          <CgGym className="offer-icon" />
          <p className="text-[15px] mb-[7px] text-[#264653] uppercase font-bold">
            {t("equipment")}
          </p>
          <p className=" hidden text-[13px] text-[#264653] text-center lg:block">
            {t("lorem")}
          </p>
        </div>
        <div className="  w-[200px]  mb-[15px]  flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200  md:w-[300px] md:text-[14px] lg:text-[15px] lg:w-unset">
          <IoNutrition className="offer-icon" />
          <p className=" text-[12px] mb-[7px] text-[#264653] uppercase font-bold">
            {t("nutrition")}
          </p>
          <p className=" hidden text-[13px] text-[#264653] text-center lg:block">
            {t("lorem")}
          </p>
        </div>
        <div className="w-[200px]  mb-[15px] flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200  md:w-[300px] md:text-[14px] lg:text-[15px] lg:w-unset">
          <MdOutlineSportsGymnastics className="offer-icon" />

          <p className="text-[12px] mb-[7px] text-[#264653] uppercase font-bold">
            {t("training")}
          </p>
          <p className="hidden text-[13px] text-[#264653] text-center lg:block">
            {t("lorem")}
          </p>
        </div>
        <div className="w-[200px]  mb-[15px] flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200 md:w-[300px] md:text-[14px] lg:text-[15px] lg:w-unset">
          <PiHeartbeatFill className="offer-icon" />

          <p className="text-[12px] mb-[7px] text-[#264653] uppercase font-bold">
            {t("needs")}
          </p>
          <p className=" hidden text-[13px] text-[#264653] text-center lg:block">
            {t("lorem")}
          </p>
        </div>
      </div>
    </div>
  );
}
