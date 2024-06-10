import Articles from "./Articles";
import ChooseUs from "./ChooseUs";
import { MainVideo } from "./MainVideo";
import Offer from "./Offer";
import Stuff from "./Stuff";
import BmiCalculator from "./BmiCalculator";
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
        <BmiCalculator />
        <Stuff />
        {/* <Slider /> */}
      </div>
    </>
  );
};

export { HomePageLayout };
