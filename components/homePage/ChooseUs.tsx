import { CgGym } from "react-icons/cg";
import { IoNutrition } from "react-icons/io5";
import { MdOutlineSportsGymnastics } from "react-icons/md";
import { PiHeartbeatFill } from "react-icons/pi";

export default function ChooseUs() {
  return (
    <div className=" w-full  py-[30px] img flex flex-col items-center">
      <h2 className="text-center text-[34px] uppercase text-[#ffffff] my-[25px] ">
        Why Choose us?{" "}
      </h2>
      <div className="w-[95%] m-auto flex items-center justify-between  ">
        <div className="flex flex-col items-center justify-center shadow-lg bg-white opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200">
          <CgGym className="offer-icon" />
          <p className="text-[15px] mb-[7px] text-[#264653] uppercase font-bold">
            Modern equipment
          </p>
          <p className="text-[13px] text-[#264653] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200">
          <IoNutrition className="offer-icon" />
          <p className="text-[15px] mb-[7px] text-[#264653] uppercase font-bold">
            Healthy nutrition plan
          </p>
          <p className="text-[13px] text-[#264653] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200">
          <MdOutlineSportsGymnastics className="offer-icon" />

          <p className="text-[15px] mb-[7px] text-[#264653] uppercase font-bold">
            training plan
          </p>
          <p className="text-[13px] text-[#264653] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </p>
        </div>
        <div className="flex flex-col items-center justify-center shadow-lg bg-white  opacity-50 hover:opacity-100 rounded-lg mr-[10px] p-[20px] cursor-pointer hover:scale-110 transition-all duration-200">
          <PiHeartbeatFill className="offer-icon" />

          <p className="text-[15px] mb-[7px] text-[#264653] uppercase font-bold">
            Unique to your needs
          </p>
          <p className="text-[13px] text-[#264653] text-center">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut dolore facilisis.
          </p>
        </div>
      </div>
    </div>
  );
}
