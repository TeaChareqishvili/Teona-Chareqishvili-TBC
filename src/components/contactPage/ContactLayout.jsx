import { ContactForm } from "./ContactForm";
import { ContactInformation } from "./ContactInformation";

const ContactLayout = () => {
  return (
    <main>
      <ContactInformation />
      <ContactForm />
    </main>
  );
};

export { ContactLayout };
