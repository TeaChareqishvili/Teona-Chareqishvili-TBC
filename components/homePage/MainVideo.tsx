const MainVideo = () => {
  const videoUrl =
    "https://live.staticflickr.com/video/53808037585/846f3047a2/1080p.mp4?s=eyJpIjo1MzgwODAzNzU4NSwiZSI6MTcxOTA0NDc3NCwicyI6IjZmNDMyNTNhY2JkMDkwZjMwOGYyMGU4YmI5Y2Q5Mzc1YTRhOTA1NTciLCJ2IjoxfQ";

  return (
    <div className="w-full">
      <div>
        {" "}
        <video src={videoUrl} autoPlay muted loop />
      </div>
      <div className="absolute top-[200px] left-[5%] flex flex-col">
        <p className=" title text-[15px] tracking-widest text-[white] md:text-[20px] lg:text-[38px] ">
          Don’t limit your challenges.
        </p>
        <p className=" title text-[15px] tracking-widest text-[white] md:text-[20px] lg:text-[38px]">
          {" "}
          Challenge your limits.
        </p>
      </div>
    </div>
  );
};

export { MainVideo };
