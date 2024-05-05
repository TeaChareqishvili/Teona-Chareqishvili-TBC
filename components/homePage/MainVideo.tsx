const MainVideo = () => {
  return (
    <div className="w-full  mb-[40px]">
      <div>
        {" "}
        <video
          src={require("../../public/assets/video/girlPlant.mp4")}
          autoPlay
          muted
          loop
        />
      </div>
      <div className="absolute top-[40%] left-[5%] flex flex-col">
        <h1 className="text-[28px] tracking-widest text-[#ffffff]">
          "To plant a garden is to believe in tomorrow."{" "}
        </h1>
        <span className="text-[18px] text-[#ffffff]">— Audrey Hepburn</span>
      </div>
    </div>
  );
};

export { MainVideo };
