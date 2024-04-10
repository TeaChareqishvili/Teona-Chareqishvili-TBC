// "use client";
// import { useState, useEffect } from "react";
import { ProductItems } from "./ProductItems";

const ProductList = ({ filteredProducts, productItems }) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productItems;

  // const [productItems, setProductItems] = useState([]);

  // useEffect(() => {
  //   async function getItem() {
  //     const res = await fetch("https://dummyjson.com/products");
  //     const data = await res.json();
  //     setProductItems(data.products);
  //   }
  //   getItem();
  // }, []);

  console.log(productItems);

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
