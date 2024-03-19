import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";
import { Routes, Route } from "react-router-dom";

function App() {
  function setPreferredColorScheme() {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.style.backgroundColor = prefersDarkMode ? "#8B9092" : "white";
  }

  setPreferredColorScheme();

  window
    .matchMedia("(prefers-color-scheme: dark)")
    .addEventListener("change", setPreferredColorScheme);

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Routes>{/* <Route path="/" element={< />} /> */}</Routes>
      <Footer />
    </div>
  );
}

export default App;
