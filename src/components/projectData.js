import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

const socilaLinkData = [
  {
    id: 1,
    link: <TiSocialFacebook className="link" />,
    address: "https://facebook.com",
  },
  {
    id: 2,
    link: <AiFillInstagram className="link" />,
    address: "https://instagram.com",
  },
  {
    id: 3,
    link: <FaTwitter className="link" />,
    address: "https://twitter.com",
  },
];

const navList = [
  {
    id: 1,
    title: "Home",
  },
  {
    id: 2,
    title: "Shop",
  },
  {
    id: 3,
    title: "Blog",
  },
  {
    id: 4,
    title: "About",
  },
  {
    id: 5,
    title: "Contact",
  },
];

export { socilaLinkData };
export { navList };
