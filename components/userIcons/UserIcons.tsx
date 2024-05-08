"use client";
import { IoPersonAdd } from "react-icons/io5";
import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import Modal from "../modal/Modal";
import { useState } from "react";

const UserIcons = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
    console.log("modal");
  };
  return (
    <div className="flex items-center justify-center">
      <IoPersonAdd
        className="user-icon"
        onClick={handleModal} // Open modal on click
      />
      <TiUserDelete className="user-icon" />
      <FaUserEdit className="user-icon" />

      <Modal isOpen={isModalOpen} onClose={() => setModalOpen(false)}>
        <h2 className="text-xl font-bold">Add User</h2>
        <p>Here, you can add your user information.</p>
      </Modal>
    </div>
  );
};

export { UserIcons };
