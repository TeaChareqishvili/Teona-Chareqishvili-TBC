import Articles from "./Articles";
import ChooseUs from "./ChooseUs";
import { MainVideo } from "./MainVideo";
import Offer from "./Offer";
import Stuff from "./Stuff";
import BmiCalculator from "./BmiCalculator";
import OurProducts from "./OurProducts";
import GetInTouchAi from "./GetInTouchAi";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <Offer />
        <ChooseUs />
        <Articles />
        <OurProducts />
        <BmiCalculator />
        <GetInTouchAi />
        <Stuff />
      </div>
    </>
  );
};

export { HomePageLayout };
