"use client";

import { TiUserDelete } from "react-icons/ti";
import { FaUserEdit } from "react-icons/fa";
import { deleteUser } from "@/apiUsers";

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
  return (
    <div className="flex items-center justify-center">
      <TiUserDelete className="user-icon" onClick={handleDelete} />
      <FaUserEdit className="user-icon" />
    </div>
  );
};

export { UserIcons };
