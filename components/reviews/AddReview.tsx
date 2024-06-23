"use client";
import { useState } from "react";
import { HiOutlinePencilSquare } from "react-icons/hi2";

import ReviewModal from "../modal/ReviewModal";
import SingleProductAddComment from "./Reviews";

const AddReview = ({ id }: { id: string }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };

  return (
    <>
      {/* <button
        className="border border-[#5a5f5a] text-[20px] text-[#5a5f5a] tracking-widest uppercase rounded-md mt-[15px] py-[10px] px-[5px] w-[200px] cursor-pointer  dark:bg-[#264653] dark:text-[#ffffff]"
        onClick={handleModal}
      >
        add review
      </button> */}
      <HiOutlinePencilSquare
        onClick={handleModal}
        className="cursor-pointer review-icon hover:scale-150 transition-all duration-200"
      />

      <ReviewModal isOpen={isModalOpen} onClose={handleModalClose}>
        <SingleProductAddComment id={id} />
      </ReviewModal>
    </>
  );
};
export default AddReview;
