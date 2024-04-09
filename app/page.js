import { MainContent } from "../components/mainContent/MainContent";
import { Suspense } from "react";
import Loading from "./Loading";

export default function Home() {
  return (
    <main className="px-10 py-8 sm:px-16 sm:py-12 flex-1 w-full mx-auto">
      <Suspense fallback={<Loading />}>
        {" "}
        <MainContent />
      </Suspense>
    </main>
  );
}
