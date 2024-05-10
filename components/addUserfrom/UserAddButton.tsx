"use client";
import { useState } from "react";
import Modal from "../modal/Modal";
import AddUserForm from "./AddUSerForm";

const UserAddButton = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[150px] cursor-pointer"
        onClick={handleModal}
      >
        Add New User
      </button>
      <Modal isOpen={isModalOpen} onClose={handleModalClose}>
        <AddUserForm handleModalClose={handleModalClose} />
      </Modal>
    </>
  );
};
export { UserAddButton };
