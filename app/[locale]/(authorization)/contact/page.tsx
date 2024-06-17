import ContactData from "@/components/contactPage/ContactData";
import ContactForm from "@/components/contactPage/ContactForm";
import { SocialLinks } from "@/components/headerFooterContent/SocialLinks";

const ContactLayout = () => {
  return (
    <div className="contact-layout flex flex-col items-center justify-around relative lg:flex-row">
      <div className="contact-cover"></div>
      <div className="z-10 flex flex-col items-center">
        {" "}
        <ContactData fontSize="20px" display="" />
        <SocialLinks />
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactLayout;
