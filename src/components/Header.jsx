import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
import logo from "../assets/image/logo.webp";
import { MobileMenu } from "./MobileMenu";

const Header = () => {
  // function to open menu for mobile
  const handleOpenMenu = () => {
    const openMenu = document.querySelector(".mobile-menu");
    if (openMenu.style.display === "none") {
      openMenu.style.display = "block";
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <div className="logo">
          <img src={logo} alt="logo" />
        </div>
        <GiHamburgerMenu className="burger-menu" onClick={handleOpenMenu} />
        <div className="header-navigation">
          <Navigation marginLeft="30px" display="flex" />
        </div>
      </div>
      <MobileMenu />
    </header>
  );
};

export { Header };
