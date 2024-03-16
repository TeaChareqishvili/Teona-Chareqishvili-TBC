import { SocialLinks } from "./SocialLinks";
import logo from "../assets/image/logo.webp";
import { Navigation } from "./Navigation";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="logo">
            <img src={logo} alt="logo" />
          </div>
          <div className="footer-rights">
            <p className="rights">© 2024 ყველა უფლება დაცულია</p>
            <p className="rules">წესები და პირობები</p>
          </div>
          <SocialLinks />
        </div>
        <div className="nav-links">
          <h2>Links</h2>
          <Navigation color="#FFFFFF" marginBottom="7px" />
        </div>
        <div className="email">
          <label>
            <input className="subscribe" type="email" placeholder="E-mail" />
          </label>
          <button className="send-btn">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
