import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { MainContent } from "./components/MainContent";

function App() {
  // if(window.innerWidth>=1024){
  //   const openMenu = document.querySelector(".mobile-menu");
  //   openMenu.style.display = "none";
  // }

  return (
    <div className="App">
      <Header />
      <Banner />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
