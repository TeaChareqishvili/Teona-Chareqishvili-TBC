"use client";
import React, { useState } from "react";
import { createNewContact } from "../../app/[locale]/actions";
import SendContactPopUp from "./SendContactPopUp";

export default function ContactForm() {
  const [message, setMessage] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  console.log(formData);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await createNewContact(formData);
      setMessage(true); // Set message to true on successful contact creation
    } catch (error) {
      console.error(error);
      setMessage(false); // Optionally set message to false on error
    }
  };

  return (
    <div className="z-10 flex flex-col items-center justify-center relative">
      <h2 className="text-[28px] text-[#ffffff] mb-[20px]">Leave Message</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b border-white text-[15px] text-[#ffffff] w-[300px]"
            type="text"
            name="name"
            placeholder="Name..."
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b border-white text-[15px] text-[#ffffff] w-[300px]"
            type="email"
            name="email"
            placeholder="Email..."
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b border-white text-[15px] text-[#ffffff] w-[300px]"
            type="number"
            name="phone"
            placeholder="Phone Number..."
            value={formData.phone}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b border-white text-[15px] text-[#ffffff] w-[300px]"
            type="text"
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className=" mt-[20px] border border-white px-[15px] py-[7px] text-[17px] text-[#ffffff] bg-transparent cursor-pointer"
          type="submit"
        >
          Submit
        </button>
      </form>
      {message && <SendContactPopUp />}
    </div>
  );
}
