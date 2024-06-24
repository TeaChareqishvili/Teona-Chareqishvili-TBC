import Link from "next/link";
import { BsRobot } from "react-icons/bs";

export default function GetInTouchAi() {
  return (
    <div className="w-full h-[350px] flex flex-col items-center justify-center">
      <h3 className="text-shadow-drop-center  dark:text-white text-[32px] tracking-wide text-[#212A31]">
        Receive a personal consultation from our chatBot
      </h3>

      <Link
        className="cursor-pointer flex items-center justify-center uppercase dark:text-white text-[15px] text-[#212A31]"
        href="/openAi"
      >
        Click
        <BsRobot className="dark:text-white text-[#212A31]" />
      </Link>
    </div>
  );
}
