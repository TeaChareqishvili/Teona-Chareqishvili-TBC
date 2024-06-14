// import { HomePageLayout } from "@/components/homePage/HomePageLayout";

import ButtonOpen from "@/components/ButtonOpen";

export default function Home() {
  return (
    <>
      <main className="h-screen h-sm:px-16  flex-1 w-full mx-auto">
        {/* <HomePageLayout /> */}
        <div className="w-full h-screen z-20 bg-black absolute top-0 left-0">
          <ButtonOpen />
        </div>
      </main>
    </>
  );
}
