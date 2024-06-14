const MainVideo = () => {
  const videoUrl =
    "https://rdawkbs6qlsqqeww.public.blob.vercel-storage.com/bannertest-58rRS4tzCq22gjqmumxc6YoH3Gm5o7.mp4";

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
