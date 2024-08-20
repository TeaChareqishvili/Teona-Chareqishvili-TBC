"use client";
import { useEffect, useRef } from "react";

const MainVideo = () => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const videoUrl =
    "https://tvpca3wafgomkw7i.public.blob.vercel-storage.com/bannertest-GFXBxSvEbFw1oQchkYZKQKeIyh9ESg.mp4";

  useEffect(() => {
    const handleResize = () => {
      if (videoRef.current) {
        // Add a null check
        if (window.innerWidth < 768) {
          videoRef.current.pause();
        } else {
          videoRef.current.play();
        }
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="w-full">
      <div>
        {" "}
        <video
          ref={videoRef}
          src={videoUrl}
          muted
          loop
          autoPlay
          className="w-full h-auto"
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
