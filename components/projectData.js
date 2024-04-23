import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";

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
    id: 4,
    title: "Blog",
  },
  {
    id: 5,
    title: "Contact",
  },
];

const iconData = [
  {
    id: 1,
    icon: (
      <CiSearch className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#70cbcb] dark:text-[#ffffff] dark:hover:text-[#70cbcb]" />
    ),
    title: "search",
  },
  {
    id: 2,
    icon: (
      <BsPerson className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[##70cbcb] dark:text-[#ffffff] dark:hover:text-[#70cbcb]" />
    ),
    title: "logIn",
  },
  {
    id: 3,
    icon: (
      <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#70cbcb] dark:text-[#ffffff] dark:hover:text-[#70cbcb]" />
    ),
    title: "cart",
  },
];

const inputFields = [
  { name: "name", type: "text", placeholder: "Name", required: true },
  { name: "lastName", type: "text", placeholder: "Last Name", required: true },
  { name: "email", type: "email", placeholder: "Email", required: true },
  {
    name: "password",
    type: "password",
    placeholder: "Write Password",
    pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    title:
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    required: true,
  },
  {
    name: "confirmPassword",
    type: "password",
    placeholder: "Confirm Password",
    pattern: "(?=.*d)(?=.*[a-z])(?=.*[A-Z]).{8,}",
    title:
      "Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters",
    required: true,
  },
];

export { inputFields };

export { iconData };

export { socilaLinkData };
export { navList };
