import { SocialLinks } from "../SocialLinks";

const ContactInformation = () => {
  return (
    <div className="contact-info-wrapper">
      <h2>Contact Us</h2>
      <p>
        Number:{" "}
        <a href="tel:+53345795332453" className="contact-info">
          +53 345 7953 32453
        </a>
      </p>
      <p>
        Address:{" "}
        <a
          href="https://maps.google.com?q=1481%20Creekside%20Lane%20Avila%20Beach,%20CA%20931"
          className="contact-info"
        >
          1481 Creekside Lane Avila Beach, CA 931
        </a>
      </p>
      <p>
        Email:{" "}
        <a href="mailto:yourmail@gmail.com" className="contact-info">
          yourmail@gmail.com
        </a>
      </p>
      <SocialLinks />
    </div>
  );
};

export { ContactInformation };
