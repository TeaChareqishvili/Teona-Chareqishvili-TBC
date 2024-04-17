import { MainContent } from "../../components/mainContent/MainContent";
// import { Footer } from "../../components/headerFooterContent/Footer";
// import { Header } from "../../components/headerFooterContent/Header";

export default function Home() {
  return (
    <>
      {/* <Header /> */}
      <main className="px-10 py-8 sm:px-16 sm:py-12 flex-1 w-full mx-auto">
        <MainContent />
      </main>
      {/* <Footer /> */}
    </>
  );
}
