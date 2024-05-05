import { AboutUs } from "./AboutUs";
import { Articles } from "./Articles";
import { MainVideo } from "./MainVideo";

const HomePageLayout = () => {
  return (
    <>
      <div className="flex flex-col">
        {" "}
        <MainVideo />
        <Articles />
        <AboutUs />
      </div>
    </>
  );
};

export { HomePageLayout };
