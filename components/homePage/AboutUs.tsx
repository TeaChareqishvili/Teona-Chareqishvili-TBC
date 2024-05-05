import aboutImg from "../../public/assets/image/home/about.jpg";
import Image from "next/image";

const AboutUs = () => {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="w-2/4 h-[500px]">
        <Image className="w-full h-full" src={aboutImg} alt="plant" />
      </div>
      <div className="w-2/4 flex flex-col items-center justify-start p-[20px]">
        <h3 className="text-[#747775] text-[26px] underline mb-[15px]">
          About Us
        </h3>
        <p className="text-[#747775] w-[400px] tracking-widest italic">
          "Since 1993 we have roamed is a blog from the earliest years. Lorem
          ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
          veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex
          ea commodo consequat. Duis aute irure dolor in reprehenderit in
          voluptate velit esse cillum dolore eu fugiat."
        </p>
      </div>
    </div>
  );
};

export { AboutUs };
