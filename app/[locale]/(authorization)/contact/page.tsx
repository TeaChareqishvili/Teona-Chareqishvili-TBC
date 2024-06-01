import { ContactForm } from "../../../../components/contactPage/ContactForm";
import { ContactInformation } from "../../../../components/contactPage/ContactInformation";

const ContactLayout = () => {
  return (
    <div className="w-full flex flex-col lg:mt-[150px] mt-[90px] ">
      {" "}
      <ContactInformation />
      <ContactForm />
    </div>
  );
};

export default ContactLayout;
