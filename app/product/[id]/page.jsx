"use client";
import Image from "next/image";
import React, { useEffect, useState } from "react";

const ProductDetails = ({ params }) => {
  const [productDetail, setProductDetail] = useState({});

  useEffect(() => {
    async function getSingleItem() {
      const res = await fetch(`https://dummyjson.com/products/${params.id}`);
      const data = await res.json();
      setProductDetail(data);
    }
    getSingleItem();
  }, []);

  console.log(productDetail);
  return (
    <div className="single-product-wrapper">
      <div className="image-wrapper">
        {productDetail.images &&
          productDetail.images.map((image, index) => (
            <div className="w-[250px] height-[250px]">
              <Image
                key={index}
                src={image}
                alt="item"
                width={150}
                height={150}
                className="cursor-pointer m-[20px] hover:scale-110 transition-transform duration-300"
              />
            </div>
          ))}
      </div>
      <div>
        <p className="font-base mb-[10px]">
          <strong>Brand:</strong>
          {productDetail.brand}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Title:</strong>
          {productDetail.title}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Category:</strong>
          {productDetail.category}
        </p>
        <p className="font-base mb-[10px]">
          <strong>description:</strong>
          {productDetail.description}
        </p>
        <p className="font-base mb-[10px]">
          <strong>price:$</strong>
          {productDetail.price}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Discount:%</strong>
          {productDetail.discountPersentage}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Rating:</strong>
          {productDetail.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
