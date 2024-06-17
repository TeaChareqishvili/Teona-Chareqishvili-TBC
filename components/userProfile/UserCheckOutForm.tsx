import React from "react";
import CheckOutBtn from "../checkoutbtn/CheckOutBtn";
import { SelectedProduct } from "../../app/[locale]/interface";

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
  return (
    <div className="max-w-md mx-auto   bg-white shadow-lg rounded-lg p-[40px]">
      <h2 className="text-2xl font-semibold mb-6 text-center text-[#1d273d]">
        Check Your Information To continue Payment Process
      </h2>
      <form className="bg-black">
        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="name"
          >
            Name
          </label>
          <input
            type="text"
            id="name"
            value={userForm.name}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label
            className="block text-gray-700 text-sm font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            value={userForm.email}
            readOnly
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
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
            value={userForm.phone_number}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
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
            value={userForm.address}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </form>
      <CheckOutBtn filteredProducts={filteredProducts} userForm={userForm} />
    </div>
  );
};

export default UserCheckOutForm;
