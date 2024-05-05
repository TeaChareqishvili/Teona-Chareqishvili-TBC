import { MdPhoneIphone } from "react-icons/md";
import { ImLocation } from "react-icons/im";
import { WiTime3 } from "react-icons/wi";
import { MdEmail } from "react-icons/md";

const ContactInformation = () => {
  return (
    <div className=" w-4/5 flex items-center justify-between py-[50px] mx-auto mb-[50px]">
      <div className="flex flex-col items-center justify-center">
        <MdPhoneIphone className="contact-icon" />
        <p className="text-[24px] text-[#4c514c]">Phone</p>
        <span className="text-[20px] text-[#4c514c] ">+01-3-8888-6868</span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <ImLocation className="contact-icon" />
        <p className="text-[24px] text-[#4c514c]">Address</p>
        <span className="text-[20px] text-[#4c514c] ">
          Iris Watson, 283 Fusce Rd,NY
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <WiTime3 className="contact-icon" />
        <p className="text-[24px] text-[#4c514c]">Open Time</p>
        <span className="text-[20px] text-[#4c514c] ">
          10:00 am to 23:00 pm
        </span>
      </div>
      <div className="flex flex-col items-center justify-center">
        <MdEmail className="contact-icon" />
        <p className="text-[24px] text-[#4c514c]">Email</p>
        <span className="text-[20px] text-[#4c514c] ">
          info.colorlib@gmail.com
        </span>
      </div>
    </div>
  );
};

export { ContactInformation };
