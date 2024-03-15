import { SocialLinks } from "./SocialLinks";
import logo from "../assets/image/logo.webp";
import { HeaderNavigation } from "./HeaderNavigation";

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
          <SocialLinks marginRight="10px" />
        </div>
        <div className="nav-links">
          <h2>Links</h2>
          <HeaderNavigation color="#FFFFFF" marginBottom="7px" />
        </div>

        <div className="email">
          <label>
            <input type="email" placeholder="E-mail" />
          </label>
          <button className="send-btn">SUBSCRIBE</button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
