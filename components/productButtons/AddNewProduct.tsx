"use client";
import { useState } from "react";
import AddProductModal from "../modal/BlogAddModal";
import ProductAddForm from "../newProductVercel/PorductAddForm";

const AddNewProduct = () => {
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
        className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  dark:bg-[#264653] dark:text-[#ffffff]"
        onClick={handleModal}
      >
        add new Product
      </button>
      <AddProductModal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductAddForm />
      </AddProductModal>
    </>
  );
};
export default AddNewProduct;
