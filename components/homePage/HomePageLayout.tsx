// import { AboutUs } from "./AboutUs";
// import { Articles } from "./Articles";
import ChooseUs from "./ChooseUs";
import { MainVideo } from "./MainVideo";
// import { Slider } from "./Slider";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <ChooseUs />
        {/* <Articles />
        <AboutUs />
        <Slider /> */}
      </div>
    </>
  );
};

export { HomePageLayout };
