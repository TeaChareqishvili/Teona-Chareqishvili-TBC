import bannerImg from "../assets/image/banner.png";

const Banner = () => {
  return (
    <section className="banner-section">
      <div className="banner">
        <img src={bannerImg} alt="banner" />
      </div>
      <div className="banner-content">
        <h1>კომპანიის სახელი</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do eiusmod
          tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
    </section>
  );
};

export { Banner };
