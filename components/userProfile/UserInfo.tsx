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
    <form onSubmit={handleFormSubmit} className="mt-4 w-full bg-[black]">
      <div className="mb-4">
        <label className="block text-gray-700">Nickname</label>
        <input
          type="text"
          placeholder="name"
          value={nickname}
          onChange={(e) => setNickname(e.target.value)}
          className="mt-1 p-2 border rounded w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Email</label>
        <input
          type="text"
          placeholder="email"
          value={user.email}
          readOnly
          className="mt-1 p-2 border rounded w-full "
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700">Phone Number</label>
        <input
          type="text"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          className="mt-1 p-2 border rounded w-full text-black"
        />
      </div>
      <div className="mb-4">
        <label className="block text-gray-700">Address</label>
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="mt-1 p-2 border rounded w-full text-black"
        />
      </div>

      <button
        type="submit"
        className="bg-blue-500 text-white py-2 px-4 rounded"
      >
        Save
      </button>
    </form>
  );
}
