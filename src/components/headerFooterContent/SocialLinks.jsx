import { socilaLinkData } from "../projectData";
import { Link } from "react-router-dom";

const SocialLinks = ({ justifyContent, marginRight = "10px" }) => {
  return (
    <div className="social-links">
      <p>Find Us</p>
      <div className="links" style={{ justifyContent: justifyContent }}>
        {socilaLinkData.map((item) => (
          <div key={item.id} style={{ marginRight: marginRight }}>
            <Link to={item.address} target="_blank" rel="noreferrer">
              {item.link}
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SocialLinks };
