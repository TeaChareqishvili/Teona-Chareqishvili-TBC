import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";
import { ContactMap } from "./ContactMap";

const ContactLayout = () => {
  return (
    <main>
      <div className="contact-container">
        {" "}
        <ContactInformation />
        <ContactForm />
        <ContactMap />
      </div>
    </main>
  );
};

export { ContactLayout };
