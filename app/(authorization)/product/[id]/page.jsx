"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { Loading } from "../../../../components/Loading";

const ProductDetails = ({ params: { id } }) => {
  const [productDetail, setProductDetail] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // fetches single item from products
    async function getSingleItem() {
      try {
        const res = await fetch(`https://dummyjson.com/products/${id}`);
        const data = await res.json();
        setProductDetail(data);
      } catch (err) {
        setError("Failed to fetch product details.");
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    getSingleItem();
  }, [id]);

  //if there is no data loader is rendered
  if (loading) return <Loading />;

  console.log(productDetail);

  return (
    <div className="single-product-wrapper">
      <div className="image-wrapper">
        {productDetail.images?.map((image, index) => (
          <div key={index} className="w-[250px] h-[250px]">
            {" "}
            <Image
              src={image}
              alt="item"
              width={250}
              height={250}
              className="cursor-pointer m-[20px] hover:scale-110 transition-transform duration-300"
            />
          </div>
        ))}
      </div>
      <div>
        <p className="font-base mb-[10px]">
          <strong>Brand:</strong> {productDetail.brand}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Title:</strong> {productDetail.title}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Category:</strong> {productDetail.category}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Description:</strong> {productDetail.description}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Price: $</strong>
          {productDetail.price}
        </p>
        <p className="font-base mb-[10px]">
          <strong>Discount: %</strong>
          {productDetail.discountPercentage}
        </p>{" "}
        <p className="font-base mb-[10px]">
          <strong>Rating:</strong> {productDetail.rating}
        </p>
      </div>
    </div>
  );
};

export default ProductDetails;
