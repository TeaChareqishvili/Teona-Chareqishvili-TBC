"use client";
import { useUser } from "@auth0/nextjs-auth0/client";
import { DetailProductData } from "../../app/[locale]/interface";
import { useState } from "react";
import AddReviewModal from "../modal/AddReviewModal";
import ReviewForm from "./ReviewForm";

export default function Reviews({
  productDetail,
  id,
}: {
  productDetail: DetailProductData;
  id: number;
}) {
  const { user } = useUser();
  const [isModalOpen, setModalOpen] = useState(false);
  const handleModal = () => {
    setModalOpen(true);
  };
  const handleModalClose = () => {
    setModalOpen(false);
  };
  console.log(productDetail.reviews, "review");
  return (
    <>
      {" "}
      {productDetail.reviews ? (
        productDetail.reviews.map((item, index) => (
          <div key={index}>
            <p>{item}</p>
          </div>
        ))
      ) : (
        <p>No reviews</p>
      )}
      {user && (
        <div>
          <button onClick={handleModal}>Add Review</button>{" "}
          <AddReviewModal isOpen={isModalOpen} onClose={handleModalClose}>
            <ReviewForm initReviews={productDetail.reviews} id={id} />
          </AddReviewModal>
        </div>
      )}
    </>
  );
}
