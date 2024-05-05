import { ContactForm } from "../../../../components/contactPage/ContactForm";
import { ContactInformation } from "../../../../components/contactPage/ContactInformation";
// import { ContactMap } from "../../../../components/contactPage/ContactMap";

const ContactLayout = () => {
  return (
    <div className="w-full flex flex-col mt-[130px]">
      {" "}
      <ContactInformation />
      <ContactForm />
      {/* <ContactMap /> */}
    </div>
  );
};

export default ContactLayout;
