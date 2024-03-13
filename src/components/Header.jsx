import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { HeaderNavigation } from "./HeaderNavigation";
import { SocialLinks } from "./SocialLinks";

const Header = () => {
  // function to open menu for mobile
  const handleOpenMenu = () => {
    const openMenu = document.querySelector(".mobile-menu");
    if (openMenu.style.display === "none") {
      openMenu.style.display = "block";
    }
  };

  // function to close menu for mobile
  const handleCloseMenu = () => {
    const openMenu = document.querySelector(".mobile-menu");
    if (openMenu.style.display === "block") {
      openMenu.style.display = "none";
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <span>ANY LOGO</span>
        </div>
        <GiHamburgerMenu className="burger-menu" onClick={handleOpenMenu} />
        <div className="header-navigation">
          <HeaderNavigation marginLeft="30px" display="flex" />
        </div>
      </div>
      <div className="mobile-menu" style={{ display: "none" }}>
        <div className="close-menu" onClick={handleCloseMenu}>
          <IoClose className="close-menu-icon" />
        </div>
        <div className="mobile-navigation">
          <HeaderNavigation
            flexDirection="column"
            alingItems="flex-start"
            marginBottom="20px"
          />
        </div>
        <SocialLinks justifyContent="flex-start" marginRight="10px" />
      </div>
    </header>
  );
};

export { Header };
