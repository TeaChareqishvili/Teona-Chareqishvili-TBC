// "use client";
// import { useState, useEffect } from "react";
import { ProductItems } from "./ProductItems";
import { Loading } from "../Loading";

const ProductList = ({ filteredProducts, productItems, loaded }) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productItems;

  if (loaded) return <Loading />;

  return (
    <>
      {productsToRender.map((item) => (
        <ProductItems
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          discount={item.discountPercentage}
          price={item.price}
          rating={item.rating}
          imgUrl={item.images[0]}
          stock={item.stock}
          id={item.id}
        />
      ))}
    </>
  );
};

export { ProductList };
