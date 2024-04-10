const ContactForm = () => {
  return (
    <form className="contact-form">
      <div className="w-full flex items-center justify-center flex-col">
        <label>
          <input
            className="py-3 px-4 outline-none bg-[#f3f1f1] text-[#675050] font-base font-tbc-helvetica-roman border-none rounded-lg my-3 mx-4 w-250"
            type="text"
            placeholder="Name"
          />
        </label>
        <label>
          <input
            className="py-3 px-4 outline-none bg-[#f3f1f1] text-[#675050] font-base font-tbc-helvetica-roman border-none rounded-lg my-3 mx-4 w-250"
            type="text"
            placeholder="Last Name"
          />
        </label>
      </div>
      <div className="w-full flex items-center justify-center flex-col">
        <label>
          <input
            className="py-3 px-4 outline-none bg-[#f3f1f1] text-[#675050] font-base font-tbc-helvetica-roman border-none rounded-lg my-3 mx-4 w-250"
            type="number"
            placeholder="Phone Number"
          />
        </label>
        <label>
          <input
            className="py-3 px-4 outline-none bg-[#f3f1f1] text-[#675050] font-base font-tbc-helvetica-roman border-none rounded-lg my-2 mx-4 w-250"
            type="Email"
            placeholder="Email Address"
          />
        </label>
      </div>
      <button className="w-40 h-30 bg-[#303132] py-2 px-5 border-none text-[#ffffff] text-lg font-tbc-helvetica-bold cursor-pointer  rounded-lg tracking-wide mt-4">
        SEND
      </button>
    </form>
  );
};
export { ContactForm };
