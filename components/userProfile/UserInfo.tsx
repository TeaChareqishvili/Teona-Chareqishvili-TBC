"use client";
import { useState } from "react";

import { updateUserProfile } from "@/app/[locale]/actions";

interface personaldata {
  name?: string;
  serial_id: number;
  phone_number?: string;
  address?: string;
  email: string;
}

export default function UserInfo({
  user,
  id,
}: {
  user: personaldata;
  id: number;
}) {
  const [nickname, setNickname] = useState(user?.name || "");
  const [phoneNumber, setPhoneNumber] = useState(user?.phone_number || "");
  const [address, setAddress] = useState(user?.address || "");

  const formData = {
    nickname: nickname || "",
    phoneNumber: phoneNumber || "",
    address: address || "",
  };

  console.log(formData, "profile");
  console.log(id, "profilepage");
  const handleFormSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await updateUserProfile(id, formData);
      console.log("User updated successfully");
    } catch (error) {
      console.error("Failed to update user:", error);
    }
  };

  return (
    <form onSubmit={handleFormSubmit} className="  bg-transparent">
      <h2 className="text-[24px] text-left mb-[15px]">
        You Can Change Your Personal Info here
      </h2>
      <div className="mb-4">
        <label className="block font-bold text-[#212A31] dark:text-[#D3D9D4] mb-[7px]">
          Nickname:
        </label>
        <input
          type="text"
          placeholder="name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="bg-transparent border-b-2 border-white w-[300px] py-[7px] outline-none"
        />
      </div>
      <div className="mb-4">
        <label className="block font-bold text-[#212A31] dark:text-[#D3D9D4] mb-[7px]">
          Email:
        </label>
        <input
          type="text"
          placeholder="email"
          value={user.email}
          readOnly
          className="bg-transparent border-b-2 border-white w-[300px] py-[7px] outline-none"
        />
      </div>

      <div className="mb-4">
        <label className=" font-bold text-[#212A31] block dark:text-[#D3D9D4] mb-[7px]">
          Phone Number:
        </label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="bg-transparent border-b-2 border-white w-[300px] py-[7px] outline-none"
        />
      </div>
      <div className="mb-4">
        <label className=" font-bold text-[#212A31] block dark:text-[#D3D9D4] mb-[7px]">
          Address:
        </label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="bg-transparent border-b-2 border-white w-[300px] py-[7px] outline-none"
        />
      </div>

      <button
        type="submit"
        className="dark:bg-[#212A31] bg-[#748D82] w-[150px] hover:bg-[#124E66] transition-all duration-200  text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
}
