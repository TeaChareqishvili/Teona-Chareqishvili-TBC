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
      <section className="about-us">
        <div className="about-us-container">
          <div className="about-us-img">
            <img src="../image/aboutUs.jpg" alt="company" />
          </div>
          <div className="about-us-text">
            <h2>ჩვენს შესახებ</h2>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
            aliquip ex ea commodo consequat. Duis aute irure dolor in
            reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
            pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
            culpa qui officia deserunt mollit anim id est laborum.
          </p>
          </div>
         
        </div>
      </section>
    </div>
  );
}

export default App;
