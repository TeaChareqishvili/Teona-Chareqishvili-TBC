import { SocialLinks } from "./SocialLinks";
import logo from "../assets/image/footerLogo.webp";
import { Navigation } from "./Navigation";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div>
          {" "}
          <h3>Subscribe Newsletter</h3>
          <p>Subscribe newsletter to get 5% on all products</p>
        </div>
        <div className="email">
          <label>
            <input className="subscribe" type="email" placeholder="E-mail" />
          </label>
          <button className="send-btn">SUBSCRIBE</button>
        </div>
        <SocialLinks />
      </div>
      <div className="border"></div>
      <div className="footer-container">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <Navigation
          color="#FFFFFF"
          marginBottom="7px"
          display="flex"
          marginLeft="30px"
        />
      </div>
      <div className="border"></div>
      <p className="rights">© 2024 all rights reserved</p>
    </footer>
  );
};

export { Footer };
