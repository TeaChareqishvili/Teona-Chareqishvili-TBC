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
import blog1 from "../assets/image/blogImages/blog1.webp";
import blog19 from "../assets/image/blogImages/blog19.webp";
import blog3 from "../assets/image/blogImages/blog3.webp";
import blog4 from "../assets/image/blogImages/blog4.webp";
import blog5 from "../assets/image/blogImages/blog5.webp";
import blog20 from "../assets/image/blogImages/blog20.webp";
import blog14 from "../assets/image/blogImages/blog14.webp";
import blog8 from "../assets/image/blogImages/blog8.webp";
import blog9 from "../assets/image/blogImages/blog9.webp";
import blog10 from "../assets/image/blogImages/blog10.webp";
import blog11 from "../assets/image/blogImages/blog11.webp";
import blog15 from "../assets/image/blogImages/blog15.webp";
import blog18 from "../assets/image/blogImages/blog18.webp";
import blog17 from "../assets/image/blogImages/blog17.webp";
import blog13 from "../assets/image/blogImages/blog13.webp";
import blog12 from "../assets/image/blogImages/blog12.webp";

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
    title: "Search",
  },
  {
    id: 2,
    icon: <BsPerson className="user-icon" />,
    title: "LogIn",
  },
  {
    id: 3,
    icon: <IoCartOutline className="user-icon" />,
    title: "Cart",
  },
];

const blogData = [
  {
    id: 1,
    title: "10 Tips for Better Sleep",
    description:
      "Learn how to improve your sleep quality with these simple tips.",
    date: "2023-01-05",
    image: blog1,
  },
  {
    id: 2,
    title: "Healthy Breakfast Ideas",
    description:
      "Discover delicious and nutritious breakfast recipes to start your day right.",
    date: "2023-02-12",
    image: blog19,
  },
  {
    id: 3,
    title: "How to Stay Productive While Working from Home",
    description:
      "Find out how to maintain productivity and focus while working remotely.",
    date: "2023-03-20",
    image: blog18,
  },

  {
    id: 4,
    title: "The Benefits of Meditation",
    description:
      "Explore the many benefits of incorporating meditation into your daily routine.",
    date: "2023-10-15",
    image: blog15,
  },
  {
    id: 5,
    title: "Beginner's Guide to Yoga",
    description:
      "Learn the basics of yoga and how to get started with your practice.",
    date: "2023-11-28",
    image: blog12,
  },
  {
    id: 6,
    title: "Effective Time Management Techniques",
    description:
      "Master the art of time management with these proven strategies.",
    date: "2023-04-08",
    image: blog17,
  },
  {
    id: 7,
    title: "Mindfulness Exercises for Stress Relief",
    description:
      "Practice mindfulness to reduce stress and improve your overall well-being.",
    date: "2023-05-17",
    image: blog12,
  },
  {
    id: 8,
    title: "The Power of Positive Thinking",
    description:
      "Harness the power of positive thinking to achieve your goals and live a happier life.",
    date: "2023-06-22",
    image: blog17,
  },
  {
    id: 9,
    title: "Easy Ways to Incorporate Exercise into Your Daily Routine",
    description:
      "Discover simple yet effective ways to make exercise a regular part of your life.",
    date: "2023-07-11",
    image: blog11,
  },
  {
    id: 10,
    title: "Simple Tips for Better Posture",
    description:
      "Improve your posture and reduce back pain with these easy-to-follow tips.",
    date: "2023-08-29",
    image: blog8,
  },
  {
    id: 11,
    title: "Benefits of Drinking Water",
    description:
      "Learn about the importance of hydration and how drinking enough water can benefit your health.",
    date: "2023-09-14",
    image: blog3,
  },
  {
    id: 12,
    title: "The Art of Journaling for Self-Reflection",
    description:
      "Discover the therapeutic benefits of journaling and how it can help you gain insights into your thoughts and emotions.",
    date: "2023-10-03",
    image: blog13,
  },
  {
    id: 13,
    title: "Healthy Snack Ideas for Work",
    description:
      "Fuel your workday with these nutritious and satisfying snack options.",
    date: "2023-11-19",
    image: blog19,
  },
  {
    id: 14,
    title: "Tips for Effective Goal Setting",
    description:
      "Set and achieve your goals with these practical tips and strategies.",
    date: "2023-12-07",
    image: blog14,
  },
  {
    id: 15,
    title: "The Top 10 Fastest Cars of 2023",
    description:
      "Explore the latest supercars and hypercars that are setting speed records this year.",
    date: "2023-01-15",
    image: blog9,
  },
  {
    id: 16,
    title: "Tips for Planning a Road Trip",
    description:
      "Plan your next road trip like a pro with these essential tips and tricks.",
    date: "2023-02-28",
    image: blog20,
  },
  {
    id: 17,
    title: "Adventures in Wildlife Photography",
    description:
      "Embark on a photographic journey into the wild and capture stunning images of nature's beauty.",
    date: "2023-03-10",
    image: blog5,
  },
  {
    id: 18,
    title: "Exploring National Parks: Hidden Gems and Must-See Attractions",
    description:
      "Discover lesser-known treasures and iconic landmarks in the United States' national parks.",
    date: "2023-04-20",
    image: blog14,
  },
  {
    id: 19,
    title: "The Ultimate Guide to Pet Care",
    description:
      "Learn how to properly care for your furry friends and ensure their health and happiness.",
    date: "2023-05-05",
    image: blog10,
  },
  {
    id: 20,
    title: "The Power of Positive Thinking",
    description:
      "Harness the power of positive thinking to achieve your goals and live a happier life.",
    date: "2023-06-22",
    image: blog4,
  },
];

const logIn = {
  name: "Teona",
  lastName: "ChareqiShvili",
  email: "Teona@gmail.com",
  password: "",
  confirm: "",
};

export { logIn };
export { blogData };
export { iconData };
export { productData };
export { socilaLinkData };
export { navList };
