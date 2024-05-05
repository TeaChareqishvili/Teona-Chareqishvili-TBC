// import { LangButton } from "../languageChange/LangButton";
// import { LogOutButton } from "../logOutButton/LogOutButton";

const MainVideo = () => {
  return (
    <div className="w-full ">
      <div>
        {" "}
        <video
          src={require("../../public/assets/video/girlPlant.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[30%] left-[25%]">
        <h1 className="text-[28px] tracking-widest ">
          "To plant a garden is to believe in tomorrow." — Audrey Hepburn
        </h1>
        <div className="flex items-start justify-around mt-[10px]">
          {/* <LogOutButton />
          <LangButton /> */}
        </div>
      </div>
    </div>
  );
};

export { MainVideo };
