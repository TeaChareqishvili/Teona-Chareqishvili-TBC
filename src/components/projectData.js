import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";
import bag from "../assets/image/productImg/bag.webp";
import jeans2 from "../assets/image/productImg/jeans2.webp";
import watch from "../assets/image/productImg/watch.webp";
import watch2 from "../assets/image/productImg/watch2.webp";
import bag2 from "../assets/image/productImg/bag2.webp";
import bag3 from "../assets/image/productImg/bag3.webp";
import shoes from "../assets/image/productImg/shoes.webp";
import tShirt from "../assets/image/productImg/T-shirt.webp";
import tShirt2 from "../assets/image/productImg/T-shirt2.webp";
import jeans from "../assets/image/productImg/jeans.webp";
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
    id: 2,
    title: "Men",
  },
  {
    id: 3,
    title: "Women",
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

const productData = [
  {
    id: 1,
    imgUrl: bag,
    title: "Bag",
    description: "Lorem ipsum dolor sit amet",
    price: "79$",
    type: "New",
  },
  {
    id: 2,
    imgUrl: jeans2,
    title: "Jeans",
    description: "Lorem ipsum dolor sit amet",
    price: "154$",
    type: "Sale",
  },
  {
    id: 3,
    imgUrl: watch,
    title: "Watch",
    description: "Lorem ipsum dolor sit amet",
    price: "454$",
    type: "Sold",
  },
  {
    id: 4,
    imgUrl: watch2,
    title: "Watch",
    description: "Lorem ipsum dolor sit amet",
    price: "354$",
    type: "New",
  },
  {
    id: 5,
    imgUrl: bag2,
    title: "Bag",
    description: "Lorem ipsum dolor sit amet",
    price: "57$",
    type: "New",
  },
  {
    id: 6,
    imgUrl: tShirt,
    title: "T-shirt",
    description: "Lorem ipsum dolor sit amet",
    price: "57$",
    type: "New",
  },
  {
    id: 7,
    imgUrl: bag3,
    title: "Bag",
    description: "Lorem ipsum dolor sit amet",
    price: "57$",
    type: "Sale",
  },
  {
    id: 8,
    imgUrl: shoes,
    title: "Shoes",
    description: "Lorem ipsum dolor sit amet",
    price: "57$",
    type: "New",
  },
  {
    id: 9,
    imgUrl: jeans,
    title: "Jeans",
    description: "Lorem ipsum dolor sit amet",
    price: "99$",
    type: "Sale",
  },
  {
    id: 10,
    imgUrl: tShirt2,
    title: "T-shirt",
    description: "Lorem ipsum dolor sit amet",
    price: "57$",
    type: "Sold",
  },
];

const iconData = [
  {
    id: 1,
    icon: <CiSearch className="user-icon" />,
  },
  {
    id: 2,
    icon: <BsPerson className="user-icon" />,
  },
  {
    id: 3,
    icon: <IoCartOutline className="user-icon" />,
  },
];

export { iconData };
export { productData };
export { socilaLinkData };
export { navList };
