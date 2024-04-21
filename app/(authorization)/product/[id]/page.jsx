"use server";

import Image from "next/image";

// function to generate static product data
export async function generateStaticParams() {
  const response = await fetch("https://dummyjson.com/products");
  const products = await response.json();

  const paths = products.products.map((post) => ({
    params: { id: post.id },
  }));

  return paths;
}

// function to fetch single product data
async function fetchProducts(id) {
  const response = await fetch(`https://dummyjson.com/products/${id}`);
  const productDetail = await response.json();
  return productDetail;
}

export default async function ProductDetails({ params }) {
  const productDetail = await fetchProducts(params.id);

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
}
