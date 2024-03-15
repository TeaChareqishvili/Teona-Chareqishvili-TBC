import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { MainContent } from "./components/MainContent";

function App() {
  // function setPreferredColorScheme() {
  //   const prefersDarkMode = window.matchMedia(
  //     "(prefers-color-scheme: dark)"
  //   ).matches;
  //   document.body.style.backgroundColor = prefersDarkMode ? "black" : "white";
  // }

  // // Call the function initially to set the color scheme based on the user's preference
  // setPreferredColorScheme();

  // // Add a listener to handle changes in the user's color scheme preference
  // window
  //   .matchMedia("(prefers-color-scheme: dark)")
  //   .addEventListener("change", setPreferredColorScheme);

  return (
    <div className="App">
      <Header />
      <MainContent />
      <Footer />
    </div>
  );
}

export default App;
