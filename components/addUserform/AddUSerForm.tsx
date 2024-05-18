"use client";
import { addUserInfo } from "../../app/[locale]/actions";
import { useScopedI18n } from "../../locales/client";
interface AddUserFormProps {
  handleModalClose: () => void;
}

export default async function AddUserForm({
  handleModalClose,
}: AddUserFormProps) {
  const handleModal = () => {
    setTimeout(handleModalClose, 0);
  };

  const scopedT = useScopedI18n("addUser");

  return (
    <>
      <form
        action={addUserInfo}
        className="flex flex-col items-center justify-center py-[20px] px-[30px]"
      >
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="text"
          placeholder={scopedT("name")}
          name="name"
        />
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="email"
          placeholder={scopedT("email")}
          name="email"
        />
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="number"
          placeholder={scopedT("age")}
          name="age"
        />
        <button
          onClick={handleModal}
          type="submit"
          className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[150px] cursor-pointer"
        >
          {scopedT("save")}
        </button>
      </form>
    </>
  );
}
