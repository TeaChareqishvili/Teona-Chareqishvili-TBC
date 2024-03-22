import "./App.css";
import { Header } from "./components/Header";
// import { Footer } from "./components/Footer";
import { MainContent } from "./components/mainContent/MainContent";
import { Routes, Route } from "react-router-dom";
import { ContactLayout } from "./components/contactPage/ContactLayout";

function App() {
  // function setPreferredColorScheme() {
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   document.body.style.backgroundColor = prefersDarkMode
  //     ? "#8B9092"
  //     : "#D4E3C2";
  // }

  // setPreferredColorScheme();

  // window
  //   .matchMedia("(prefers-color-scheme: dark)")
  //   .addEventListener("change", setPreferredColorScheme);

  return (
    <div className="App">
      <Header />
      <main>
        <Routes>
          <Route path="/" element={<MainContent />} />
          <Route path="/Contact" element={<ContactLayout />} />
        </Routes>
      </main>
      {/* <Footer /> */}
    </div>
  );
}

export default App;
