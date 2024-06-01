// import { AboutUs } from "./AboutUs";
import Articles from "./Articles";
import ChooseUs from "./ChooseUs";
import { MainVideo } from "./MainVideo";
import Offer from "./Offer";
// import { Slider } from "./Slider";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <ChooseUs />
        <Offer />
        <Articles />
        {/* <AboutUs />
        <Slider /> */}
      </div>
    </>
  );
};

export { HomePageLayout };
