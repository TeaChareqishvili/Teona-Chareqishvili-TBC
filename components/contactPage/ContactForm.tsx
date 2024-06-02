"use client";
import React, { useState } from "react";
import { createNewContact } from "../../app/[locale]/actions";

export default function ContactForm() {
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
      // Optionally handle successful submission
    } catch (error) {
      // Optionally handle errors
      console.error(error);
    }
  };

  return (
    <div>
      <form className="flex flex-col" onSubmit={handleSubmit}>
        <label>
          <input
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
            type="text"
            name="message"
            placeholder="Message..."
            value={formData.message}
            onChange={handleChange}
            required
          />
        </label>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
}
