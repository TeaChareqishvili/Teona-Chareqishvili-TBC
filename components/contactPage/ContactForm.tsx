import { SocialLinks } from "../headerFooterContent/SocialLinks";

const ContactForm = () => {
  return (
    <div className="w-full bg-[#e1e6e0] py-[50px] px-[30px] mb-[30px] flex flex-col items-center justify-center">
      <h3 className="text-[32px] text-[#40443f] uppercase tracking-wider mb-[15px]">
        Leave Message
      </h3>
      <p className="text-[20px] text-[#40443f] mb-[15px] tracking-widest">
        Our staff will call back later and answer your questions.
      </p>
      <form className="w-full flex flex-col items-center justify-center">
        <label className="flex items-center justify-center">
          <input
            className=" mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            type="text"
            placeholder="Your Name"
          />
          <input
            className="mt-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            type="email"
            placeholder="Email"
          />
        </label>
        <label className="flex items-center justify-center ml-[20px]">
          <input
            className="mt-[20px] w-[720px] m-auto py-[7px] px-[10px] bg-[#f1f4f0] h-[140px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
            type="text"
            placeholder="Write your message"
          />
        </label>
        <button className="uppercase text-[20px] text-[#40443f] mt-[30px] cursor-pointer py-[7px] px-[15px] border border-[#40443f] ">
          Post Comment
        </button>
      </form>
      <SocialLinks marginTop="20px" />
    </div>
  );
};
export { ContactForm };
