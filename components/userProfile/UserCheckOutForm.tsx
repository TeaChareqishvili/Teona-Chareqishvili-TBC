"use client";
import React from "react";

import { SelectedProduct } from "../../app/[locale]/interface";
import { useState } from "react";
import { cartCheckout } from "@/app/[locale]/actions";

interface UserFormType {
  name: string;
  serial_id: number;
  email: string;
  phone_number: string;
  address: string;
}

interface UserCheckOutFormProps {
  userForm: UserFormType;
  filteredProducts: SelectedProduct[];
}

const UserCheckOutForm: React.FC<UserCheckOutFormProps> = ({
  userForm,
  filteredProducts,
}) => {
  const [phone_number, setPhone_number] = useState(userForm.phone_number || "");
  const [address, setAddress] = useState(userForm.address || "");

  const formData = {
    phone_number: phone_number || "",
    address: address || "",
  };
  const handleCheckout = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await cartCheckout({ products: filteredProducts, userForm, formData });
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="max-w-md mx-auto   bg-white shadow-lg rounded-lg p-[40px] lg:mt-[120px] lg:mb-[30px]">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#1d273d]">
        Check Your Information To continue Payment Process
      </h2>
      <form onSubmit={handleCheckout}>
        <div className="mb-4">
          <p className="flex flex-col items-center text-[#212A31] text-[18px]">
            <strong className="text-[#212A31] text-[18px]">Name</strong>
            {userForm.name}
          </p>
        </div>

        <div className="mb-4">
          <p className="flex flex-col items-center text-[#212A31] text-[18px]">
            <strong className="text-[#212A31] text-[18px]">Email</strong>
            {userForm.email}
          </p>
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="phone_number"
          >
            Phone Number
          </label>
          <input
            type="text"
            id="phone_number"
            value={phone_number}
            onChange={(e) => setPhone_number(e.target.value)}
            className="shadow appearance-none rounded-md bg-transparent border-2 border-[#D3D9D4] w-full py-3 px-3  text-[#2E3944]  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="address"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            className="shadow appearance-none rounded-md bg-transparent border-2 border-[#D3D9D4] w-full py-3 px-3  text-[#2E3944]  leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
        <button
          className="text-[#212A31] border border-black px-[10px] py-[9px] hover:bg-[#212A31] hover:text-white transition-all duration-200 rounded-md"
          type="submit"
        >
          Buy Now
        </button>
      </form>
    </div>
  );
};

export default UserCheckOutForm;
