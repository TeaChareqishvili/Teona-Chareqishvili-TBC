import "./App.css";
import { Header } from "./components/Header";
import { Footer } from "./components/Footer";
import { Banner } from "./components/Banner";
import { BlogLayout } from "./components/BlogLayout";

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <BlogLayout />
      <Footer />
    </div>
  );
}

export default App;
