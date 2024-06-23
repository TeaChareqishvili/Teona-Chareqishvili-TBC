"use client";
import { deleteProductAdminId } from "../../app/[locale]/actions";

export default function ProductDeleteAdmin({ id }: { id: number }) {
  const handleDelete = async () => {
    try {
      deleteProductAdminId(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      <button
        className="dark:text-[#2E3944] text-white px-4 py-2 bg-[#2E3944] dark:bg-[#D3D9D4] rounded-md hover:bg-[#517191] dark:hover:bg-[#a6aba7] transition-colors duration-200"
        onClick={handleDelete}
      >
        Delete
      </button>
    </>
  );
}
