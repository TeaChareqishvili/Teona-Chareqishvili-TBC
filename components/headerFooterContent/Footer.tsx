"use client";

import ContactData from "../contactPage/ContactData";
import FooterVideo from "./FooterVideo";
import Logo from "../../public/assets/image/logo.png";
import { Navigation } from "./Navigation";
import Image from "next/image";
import { SocialLinks } from "./SocialLinks";

const Footer = () => {
  return (
    <footer className="dark:bg-[#212A31] bg-[#748D92] text-white py-[30px]">
      <div className="container mx-auto flex flex-wrap justify-between">
        <div className="w-full mb-[20px]  flex flex-col items-center justify-center md:w-1/4 px-4">
          <Image width={70} height={70} src={Logo} alt="logo" />
          <p className=" text-[15px] text-center lg:text-[18px]">
            Join us at Vitality Zone for expert health and fitness tips, workout
            routines, and a supportive community to help you achieve your
            fitness goals.
          </p>
          <SocialLinks />
        </div>
        <div className="w-full md:w-1/4 px-4 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4 text-[16px] lg:text-[20px]">
            Explore
          </h2>
          <Navigation
            color="#ffffff"
            marginBottom="5px"
            display="flex"
            flexDirection="column"
            fontSize="17px"
          />
        </div>
        <div className="w-full md:w-1/4 px-4 flex flex-col items-center">
          <h2 className="text-xl font-bold mb-4">Our Contacts</h2>
          <ContactData fontSize="17px" display="none" />
        </div>
        <div className="w-full md:w-1/4 px-4">
          <h2 className="text-xl text-center font-bold lg:mb-4 lg:text-left lg:mt-[5px]">
            Offers
          </h2>
          <FooterVideo />
        </div>
      </div>
      <div className="container mx-auto text-center mt-8">
        <p className="text-white">&copy; 2024 All rights reserved</p>
      </div>
    </footer>
  );
};

export { Footer };
