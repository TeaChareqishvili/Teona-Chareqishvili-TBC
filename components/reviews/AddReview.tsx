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
