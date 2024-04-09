"use client";
import { useState, useEffect } from "react";
import { ProductItems } from "./ProductItems";

const ProductList = ({ filteredProducts, sorted }) => {
  // const productsToRender =
  //   filteredProducts.length > 0 ? filteredProducts : sorted;

  const [productItems, setProductItems] = useState([]);

  useEffect(() => {
    fetch("https://dummyjson.com/products")
      .then((res) => res.json())
      .then((res) => {
        setProductItems(res.products);
      });
  }, []);
  console.log(productItems);
  return (
    <>
      {productItems.map((item) => (
        <ProductItems
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          discount={item.discountPercentage}
          price={item.price}
          rating={item.raiting}
          imgUrl={item.thumbnail}
          stock={item.stock}
        />
      ))}
    </>
  );
};

export { ProductList };
