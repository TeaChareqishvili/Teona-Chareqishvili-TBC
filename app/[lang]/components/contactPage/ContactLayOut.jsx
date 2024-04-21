import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";
import { ContactMap } from "./ContactMap";

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
