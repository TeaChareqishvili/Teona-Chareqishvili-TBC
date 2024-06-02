import ContactForm from "@/components/contactPage/ContactForm";

const ContactLayout = () => {
  return (
    <div className="contact-layout flex items-center justify-center relative">
      <div className="contact-cover"></div>
      <ContactForm />
    </div>
  );
};

export default ContactLayout;
