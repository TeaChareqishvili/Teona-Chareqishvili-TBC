import { GiHamburgerMenu } from "react-icons/gi";
import { Navigation } from "./Navigation";
import logo from "../assets/image/logo.webp";
import { MobileMenu } from "./MobileMenu";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HeaderIcon } from "./HeaderIcon";

const Header = () => {
  const [open, setOpen] = useState(false);

  return (
    <header className="header">
      <div className="header-container">
        <Link to="/">
          {" "}
          <img src={logo} alt="logo" />
        </Link>
        <GiHamburgerMenu
          className="burger-menu"
          onClick={() => setOpen(true)}
        />
        <div className="header-navigation">
          <Navigation marginLeft="30px" display="flex" />
        </div>
        <HeaderIcon marginRight="15px" alignItmes="center" />
      </div>
      {open && <MobileMenu setOpen={setOpen} />}
    </header>
  );
};

export { Header };
