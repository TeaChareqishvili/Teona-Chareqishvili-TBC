import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="header-logo">
            <span>ANY LOGO</span>
          </div>
          <GiHamburgerMenu className="burger-menu" />
          <div className="header-navigation">
            <nav className="navigation">
              <ul className="ul-nav">
                <li>მთავარი</li>
                <li>ჩვენ შესახებ</li>
                <li>სიახლეები</li>
                <li>კონტაქტი</li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
      <section className="banner-section">
        <div className="banner">
          <img src="../image/banner.png" alt="banner" />
        </div>
        <div className="banner-content">
          <h1>კომპანიის სახელი</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
    </div>
  );
}

export default App;
