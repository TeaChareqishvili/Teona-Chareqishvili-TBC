import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const SocialLinks = ({ justifyContent, marginRight }) => {
  return (
    <div className="social-links">
      <p>დაგვეკონტაქტეთ</p>
      <div className="links" style={{ justifyContent: justifyContent }}>
        <a href="https://facebook.com" target="_blank" rel="noreferrer">
          {" "}
          <TiSocialFacebook
            className="link"
            style={{ marginRight: marginRight }}
          />
        </a>
        <a href="https://instagram.com" target="_blank" rel="noreferrer">
          <AiFillInstagram
            className="link"
            style={{ marginRight: marginRight }}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noreferrer">
          {" "}
          <FaTwitter className="link" style={{ marginRight: marginRight }} />
        </a>
      </div>
    </div>
  );
};

export { SocialLinks };
