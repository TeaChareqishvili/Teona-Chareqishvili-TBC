const MainVideo = () => {
  return (
    <div className="w-full h-[550px]">
      <video
        src={require("../../public/assets/video/mainVideo.mp4")}
        autoPlay
        muted
        loop
      />
    </div>
  );
};

export { MainVideo };
