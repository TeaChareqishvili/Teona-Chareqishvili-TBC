import "./App.css";
import { GiHamburgerMenu } from "react-icons/gi";
import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

function App() {
  return (
    <div className="App">
      <header className="header">
        <div className="header-container">
          <div className="logo">
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
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </section>
      <footer className="footer">
        <div className="footer-container">
          <div>
            <div className="logo">
              <span>ANY LOGO</span>
            </div>
            <div className="footer-rights">
              <p className="rights">© 2024 ყველა უფლება დაცულია</p>
              <p className="rules">წესები და პირობები</p>
            </div>
          </div>
          <div className="social-links">
            <p>დაგვეკონტაქტეთ</p>
            <div className="links">
              <TiSocialFacebook className="link" />
              <AiFillInstagram className="link" />
              <FaTwitter className="link" />
            </div>
          </div>
          <div className="email">
            <label>
              <input type="email" placeholder="E-mail" required />
            </label>
            <button className="send-btn">გაგზავნა</button>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
