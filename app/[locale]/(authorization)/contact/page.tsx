import ContactData from "@/components/contactPage/ContactData";
import ContactForm from "@/components/contactPage/ContactForm";
import { SocialLinks } from "@/components/headerFooterContent/SocialLinks";

const ContactLayout = () => {
  return (
    <div className="contact-layout flex items-center justify-around relative">
      <div className="contact-cover"></div>
      <div className="z-10 flex flex-col items-center">
        {" "}
        <ContactData />
        <SocialLinks />
      </div>

      <ContactForm />
    </div>
  );
};

export default ContactLayout;
