"use client";
import { useState } from "react";
import EditBlogModal from "../modal/EditBlogModal";
import BlogEditForm from "./BlogEditForm";
import { CreateBlogData } from "../../app/[locale]/interface";
import { useUser } from "@auth0/nextjs-auth0/client";
const EditBlog = ({ blog, id }: { id: number; blog: CreateBlogData }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  const { user } = useUser();

  const isAdmin = Array.isArray(user?.role)
    ? user?.role.includes("admin")
    : user?.role === "admin";
  return (
    <>
      {isAdmin && (
        <>
          <button
            className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  dark:bg-[#264653] dark:text-[#ffffff]"
            onClick={handleModal}
          >
            EDIT BLOG
          </button>
          <EditBlogModal isOpen={isModalOpen} onClose={handleModalClose}>
            <BlogEditForm
              id={id}
              blog={blog}
              handleModalClose={handleModalClose}
            />
          </EditBlogModal>
        </>
      )}
    </>
  );
};
export { EditBlog };
