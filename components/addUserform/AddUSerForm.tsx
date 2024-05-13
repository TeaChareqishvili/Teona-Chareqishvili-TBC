import { Host } from "@/apiUsers";

interface AddUserFormProps {
  handleModalClose: () => void;
}

export async function addUserInfo(formData: FormData) {
  const { name, email, age } = Object.fromEntries(formData);
  const response = await fetch(Host + "/add-user", {
    method: "POST",
    body: JSON.stringify({ name, email, age }),
  });

  const result = await response.json();

  if (result) {
    // handleModalClose();
    console.log("result");
  }
}

export default async function AddUserForm({
  handleModalClose,
}: AddUserFormProps) {
  // async function addUserInfo(formData: FormData) {
  //   const { name, email, age } = Object.fromEntries(formData);
  //   const response = await fetch(Host + "/add-user", {
  //     method: "POST",
  //     body: JSON.stringify({ name, email, age }),
  //   });

  //   const result = await response.json();

  //   // if (result) {
  //   //   handleModalClose();
  //   // }
  // }

  return (
    <>
      <form
        action={addUserInfo}
        method="post"
        className="flex flex-col items-center justify-center py-[20px] px-[30px]"
      >
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="text"
          placeholder="Name.."
          name="name"
        />
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="email"
          placeholder="Email"
          name="email"
        />
        <input
          className=" rounded-md mt-[20px] mx-[20px] w-[350px] py-[7px] px-[10px] bg-[#f1f4f0] h-[50px] outline-none border border-[#ffffff] text-[#8a8d8a] text-[18px]"
          type="number"
          placeholder="Age"
          name="age"
        />
        <button
          onClick={handleModalClose}
          type="submit"
          className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[150px] cursor-pointer"
        >
          Save
        </button>
      </form>
    </>
  );
}
