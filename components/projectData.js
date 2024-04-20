import { TiSocialFacebook } from "react-icons/ti";
import { AiFillInstagram } from "react-icons/ai";
import { FaTwitter } from "react-icons/fa";

import { CiSearch } from "react-icons/ci";
import { BsPerson } from "react-icons/bs";
import { IoCartOutline } from "react-icons/io5";
import blog1 from "../public/assets/image/blogImages/blog1.webp";
import blog19 from "../public/assets/image/blogImages/blog19.webp";
import blog3 from "../public/assets/image/blogImages/blog3.webp";
import blog4 from "../public/assets/image/blogImages/blog4.webp";
import blog5 from "../public/assets/image/blogImages/blog5.webp";
import blog20 from "../public/assets/image/blogImages/blog20.webp";
import blog14 from "../public/assets/image/blogImages/blog14.webp";
import blog8 from "../public/assets/image/blogImages/blog8.webp";
import blog9 from "../public/assets/image/blogImages/blog9.webp";
import blog10 from "../public/assets/image/blogImages/blog10.webp";
import blog11 from "../public/assets/image/blogImages/blog11.webp";
import blog15 from "../public/assets/image/blogImages/blog15.webp";
import blog18 from "../public/assets/image/blogImages/blog18.webp";
import blog17 from "../public/assets/image/blogImages/blog17.webp";
import blog13 from "../public/assets/image/blogImages/blog13.webp";
import blog12 from "../public/assets/image/blogImages/blog12.webp";

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
      <CiSearch className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#ff1f1f]" />
    ),
    title: "search",
  },
  {
    id: 2,
    icon: (
      <BsPerson className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#ff1f1f]" />
    ),
    title: "logIn",
  },
  {
    id: 3,
    icon: (
      <IoCartOutline className="w-7 h-7 text-[#38393b] transition-all duration-400 mr-5 hover:text-[#ff1f1f]" />
    ),
    title: "cart",
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
export { blogData };
export { iconData };

export { socilaLinkData };
export { navList };
