const MainVideo = () => {
  // const videoUrl = "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/video-UgAArggGv6M1lFmYQHqi22rcAy2nHa.mp4";

  return (
    <div className="w-full  mb-[40px]">
      <div>
        {" "}
        <video
          src={require("../../public/assets/video/banner.mp4")}
          autoPlay
          muted
          loop
        />
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
