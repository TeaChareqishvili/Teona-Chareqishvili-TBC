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
      <button onClick={handleDelete}>Delete</button>
    </>
  );
}
