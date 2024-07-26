import video from "../../public/assets/video/bannertest.mp4";

const MainVideo = () => {
  // const videoUrl =
  //   "https://ab9vg7azdm14stpx.public.blob.vercel-storage.com/bannertest-GSB1xCqxPTdyp69rpta7JU0qO5QurG.mp4";

  return (
    <div className="w-full">
      <div>
        {" "}
        <video src={video} autoPlay muted loop />
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
