"use client";
import { useState } from "react";
import EditProductModal from "../modal/EditProductModal";
import EditProductForm from "../newProductVercel/EditProductForm";
import { DetailProductData } from "../../app/[locale]/interface";

const EditProductButton = ({
  id,
  productDetail,
}: {
  id: number;
  productDetail: DetailProductData[];
}) => {
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
        edit Product
      </button>
      <EditProductModal isOpen={isModalOpen} onClose={handleModalClose}>
        <EditProductForm
          id={id}
          productDetail={productDetail}
          handleModalClose={handleModalClose}
        />
      </EditProductModal>
    </>
  );
};
export default EditProductButton;
