import { IoClose } from "react-icons/io5";
import { SocialLinks } from "./SocialLinks";
import { Navigation } from "./Navigation";

const MobileMenu = () => {
  // function to close menu for mobile
  const handleCloseMenu = () => {
    const openMenu = document.querySelector(".mobile-menu");
    if (openMenu.style.display === "block") {
      openMenu.style.display = "none";
    }
  };
  return (
    <div className="mobile-menu" style={{ display: "none" }}>
      <div className="close-menu" onClick={handleCloseMenu}>
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
