import { IoClose } from "react-icons/io5";
import { SocialLinks } from "./SocialLinks";
import { Navigation } from "./Navigation";

const MobileMenu = ({ setOpen }) => {
  return (
    <div className="mobile-menu">
      <div className="close-menu" onClick={() => setOpen(false)}>
        <IoClose className="close-menu-icon" />
      </div>
      <div className="mobile-navigation">
        <Navigation
          flexDirection="column"
          alingItems="flex-start"
          marginBottom="20px"
          color="#FFFFFF"
        />
      </div>
      <SocialLinks justifyContent="flex-start" />
    </div>
  );
};

export { MobileMenu };
