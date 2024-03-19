import { socilaLinkData } from "./projectData";

const SocialLinks = ({ justifyContent, marginRight = "10px" }) => {
  return (
    <div className="social-links">
      <p>Find Us</p>
      <div className="links" style={{ justifyContent: justifyContent }}>
        {socilaLinkData.map((item) => (
          <div key={item.id} style={{ marginRight: marginRight }}>
            <a href={item.address} target="_blank" rel="noreferrer">
              {item.link}
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export { SocialLinks };
