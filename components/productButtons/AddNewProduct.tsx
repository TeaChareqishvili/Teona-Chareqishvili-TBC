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
        className=" mb-[40px] bg-[#124E66] text-white dark:bg-[#D3D9D4] dark:text-[#2E3944] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  "
        onClick={handleModal}
      >
        add Product
      </button>
      <AddProductModal isOpen={isModalOpen} onClose={handleModalClose}>
        <ProductAddForm handleModalClose={handleModalClose} />
      </AddProductModal>
    </>
  );
};
export default AddNewProduct;
