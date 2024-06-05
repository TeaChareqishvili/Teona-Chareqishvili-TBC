"use client";
import { useState } from "react";
import BlogAddModal from "../modal/BlogAddModal";
import BlogAddForm from "../../components/blogs/BlogAddForm";

const AddNewBlog = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
    console.log("modal??");
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      <button
        className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  dark:bg-[#264653] dark:text-[#ffffff]"
        onClick={handleModal}
      >
        add new blog
      </button>
      <BlogAddModal isOpen={isModalOpen} onClose={handleModalClose}>
        <BlogAddForm />
      </BlogAddModal>
    </>
  );
};
export { AddNewBlog };
