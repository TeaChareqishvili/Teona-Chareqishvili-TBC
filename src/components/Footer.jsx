import { SocialLinks } from "./SocialLinks";
import logo from "../assets/image/logo.webp";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          <div className="logo">
            <Link to="/">
              {" "}
              <img src={logo} alt="logo" />
            </Link>
          </div>
          <div className="footer-rights">
            <p className="rights">© 2024 all rights reserved</p>
            <p className="rules">Rules and Terms</p>
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
