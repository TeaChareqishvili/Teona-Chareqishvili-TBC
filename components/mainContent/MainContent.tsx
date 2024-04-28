"use client";

import { SearchForProduct } from "./SearchForProduct";
import { ProductItemContainer } from "./ProductItemContainer";
import { useState, useEffect } from "react";

const MainContent = () => {
  const [productItems, setProductItems] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState<any>([]);
  const [sorted, setSorted] = useState<any>([...productItems]);

  // fetches all products and sets loader to false
  useEffect(() => {
    async function getItem() {
      const res = await fetch("https://dummyjson.com/products");
      const data = await res.json();
      setProductItems(data.products);
    }
    getItem();
  }, []);

  return (
    <>
      <SearchForProduct
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        setSorted={setSorted}
        productItems={productItems}
      />
      <ProductItemContainer
        filteredProducts={filteredProducts}
        productItems={productItems}
      />
    </>
  );
};

export { MainContent };