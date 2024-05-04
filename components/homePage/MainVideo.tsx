import { LangButton } from "../languageChange/LangButton";
import { LogOutButton } from "../logOutButton/LogOutButton";

const MainVideo = () => {
  return (
    <div className="w-full ">
      <div>
        {" "}
        <video
          src={require("../../public/assets/video/mainVideo.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[30%] left-[35%]">
        <h1 className="text-[28px] tracking-widest ">
          Buy it once, use it forever...
        </h1>
        <div className="flex items-start justify-around mt-[10px]">
          <LogOutButton />
          <LangButton />
        </div>
      </div>
    </div>
  );
};

export { MainVideo };
