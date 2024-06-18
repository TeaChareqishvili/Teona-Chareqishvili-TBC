"use client";
import React, { useState, useEffect } from "react";
import { createNewContact } from "../../app/[locale]/actions";
import ContactModal from "../modal/ContactModal";
import { MdLocalPostOffice } from "react-icons/md";
import { contactData } from "@/app/[locale]/interface";
import { useUser } from "@auth0/nextjs-auth0/client";

export default function ContactForm() {
  const [isModalOpen, setModalOpen] = useState(false);

  const [formData, setFormData] = useState<contactData>({
    name: " ",
    email: " ",
    phone: "",
    message: "",
  });

  const { user } = useUser();

  useEffect(() => {
    if (user) {
      setFormData((prevData) => ({
        ...prevData,
        name: user.name || "",
        email: user.email || "",
      }));
    }
  }, [user]);

  console.log(user);
  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await createNewContact(formData);
      setModalOpen(true);
    } catch (error) {
      console.error(error);
    }
    window.location.reload();
  };

  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <div className=" flex flex-col items-center justify-center relative">
      <h2 className="text-[28px] text-[#ffffff] mb-[20px]">Leave Message</h2>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b-2 border-white text-[15px] text-[#ffffff] w-[300px]"
            type="text"
            name="name"
            autoComplete="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b-2 border-white text-[15px] text-[#ffffff] w-[300px]"
            type="email"
            name="email"
            autoComplete="name"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </label>
        <label>
          <input
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b-2 border-white text-[15px] text-[#ffffff] w-[300px]"
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
            className="mb-[15px] outline-none px-[7px] py-[10px] bg-transparent border-b-2 border-white text-[15px] text-[#ffffff] w-[300px] h-[100px]"
            type="text"
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button
          className=" mt-[20px] border-2 border-white px-[15px] py-[7px] text-[17px] text-[#ffffff] bg-transparent cursor-pointer hover:bg-[#212A31] transition-all duration-200"
          type="submit"
        >
          Submit
        </button>
      </form>

      <ContactModal isOpen={isModalOpen} onClose={handleModalClose}>
        <div className="flex flex-col items-center p-[30px]">
          {" "}
          <MdLocalPostOffice className="text-[#2f3e46] w-[50px] h-[50px] mb-[10px]" />
          <p className="text-[15px] text-[#2f3e46] tracking-wider font-bold">
            We received your message!
          </p>
        </div>
      </ContactModal>
    </div>
  );
}
