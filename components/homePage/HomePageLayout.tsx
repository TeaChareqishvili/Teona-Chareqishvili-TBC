import { AboutUs } from "./AboutUs";
import { MainVideo } from "./MainVideo";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <AboutUs />
      </div>
    </>
  );
};

export { HomePageLayout };
