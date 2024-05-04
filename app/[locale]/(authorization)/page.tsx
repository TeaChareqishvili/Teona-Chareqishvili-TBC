// import { MainContent } from "../../../components/mainContent/MainContent";

import { HomePageLayout } from "@/components/homePage/HomePageLayout";

export default function Home() {
  return (
    <>
      <main className=" h-screen h-sm:px-16 sm:py-12 flex-1 w-full mx-auto">
        {/* <MainContent /> */}
        <HomePageLayout />
      </main>
    </>
  );
}
