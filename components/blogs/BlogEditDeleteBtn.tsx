"use client";

import Link from "next/link";
import { deleteBlogId } from "../../app/[locale]/actions";
export default function BlogEditDeleteBtn({ id }: { id: number }) {
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
        <Link href="#"> EDIT </Link>{" "}
        <Link onClick={handleDelete} href="#">
          DELETE BLOG
        </Link>
      </div>
    </>
  );
}
