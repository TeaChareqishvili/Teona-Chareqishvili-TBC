"use client";

import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { deleteUser } from "@/apiUsers";
import { useState } from "react";
import EditModal from "../modalEdit/EditModal";
import { EditUserForm } from "../modalEdit/EditUserForm";

interface UserIconsProps {
  id: number;
}
const UserIcons = ({ id }: UserIconsProps) => {
  const handleDelete = async () => {
    try {
      await deleteUser(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };

  const [isModalEditOpen, setModalEditOpen] = useState(false);
  const handleModalEditOpen = () => {
    setModalEditOpen(true);
  };
  const handleModalEditClose = () => {
    setModalEditOpen(false);
  };
  return (
    <div className="flex items-center justify-center">
      <TiUserDelete className="user-icon" onClick={handleDelete} />
      <FaUserEdit className="user-icon" onClick={handleModalEditOpen} />
      <EditModal isOpen={isModalEditOpen} onClose={handleModalEditClose}>
        <EditUserForm />
      </EditModal>
    </div>
  );
};

export { UserIcons };
