import { ContactForm } from "../../../../components/contactPage/ContactForm";
import { ContactInformation } from "../../../../components/contactPage/ContactInformation";
import { ContactMap } from "../../../../components/contactPage/ContactMap";

const ContactLayout = () => {
  return (
    <div className="contact-container">
      {" "}
      <ContactInformation />
      <ContactForm />
      <ContactMap />
    </div>
  );
};

export default ContactLayout;
