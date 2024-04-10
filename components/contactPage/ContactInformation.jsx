import { SocialLinks } from "../headerFooterContent/SocialLinks";

const ContactInformation = () => {
  return (
    <div className="flex items-start justify-start flex-col grid-area-contact">
      <h2 className="font-tbc-helvetica-bold text-lg text-[#303132] mb-2">
        Contact Us
      </h2>
      <p className="flex flex-center text-[ #303132] font-tbc-helvetica-light text-base mb-2">
        Number:{" "}
        <a
          href="tel:+53345795332453"
          className="text-gray-600 font-bold no-underline ml-6 font-tbc-helvetica-bold text-base transition duration-400 ease-in-out hover:text-red-600"
        >
          +53 345 7953 32453
        </a>
      </p>
      <p className="flex flex-center text-[ #303132] font-tbc-helvetica-light text-base mb-2">
        Address:{" "}
        <a
          href="https://maps.google.com?q=1481%20Creekside%20Lane%20Avila%20Beach,%20CA%20931"
          className="text-gray-600 font-bold no-underline ml-6 font-tbc-helvetica-bold text-base transition duration-400 ease-in-out hover:text-red-600"
        >
          1481 Creekside Lane Avila Beach, CA 931
        </a>
      </p>
      <p className="flex flex-center text-[ #303132] font-tbc-helvetica-light text-base mb-2">
        Email:{" "}
        <a
          href="mailto:yourmail@gmail.com"
          className="text-gray-600 font-bold no-underline ml-6 font-tbc-helvetica-bold text-base transition duration-400 ease-in-out hover:text-red-600"
        >
          yourmail@gmail.com
        </a>
      </p>
      <SocialLinks />
    </div>
  );
};

export { ContactInformation };
