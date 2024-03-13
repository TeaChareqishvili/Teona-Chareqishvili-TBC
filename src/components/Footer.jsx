import { SocialLinks } from "./SocialLinks";

const Footer = () => {
  return (
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
        <SocialLinks justifyContent="space-between" />
        <div className="email">
          <label>
            <input type="email" placeholder="E-mail" />
          </label>
          <button className="send-btn">გაგზავნა</button>
        </div>
      </div>
    </footer>
  );
};

export { Footer };
