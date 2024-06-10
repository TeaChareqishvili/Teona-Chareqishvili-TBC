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
        <button onClick={handleDelete}>DELETE BLOG</button>
      </div>
    </>
  );
}
