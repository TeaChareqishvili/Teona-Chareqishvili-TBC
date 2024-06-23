"use client";

import { deleteBlogId } from "../../app/[locale]/actions";
export default function BlogDeleteBtn({ id }: { id: number }) {
  const handleDelete = async () => {
    try {
      deleteBlogId(id);
    } catch (error) {
      console.error("Error deleting user:", error);
    }
  };
  return (
    <>
      <div className="flex flex-col ">
        <button
          className="dark:text-[#2E3944] text-white px-4 py-2 bg-[#2E3944] dark:bg-[#D3D9D4] rounded-md hover:bg-[#517191] dark:hover:bg-[#a6aba7] transition-colors duration-200"
          onClick={handleDelete}
        >
          DELETE
        </button>
      </div>
    </>
  );
}
