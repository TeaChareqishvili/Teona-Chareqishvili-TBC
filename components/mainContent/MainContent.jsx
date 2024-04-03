"use client";

import { SearchForProduct } from "./SearchForProduct";
import { ProductItemContainer } from "./ProductItemContainer";
import { useState } from "react";
import { productData } from "../projectData";

const MainContent = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorted, setSorted] = useState([...productData]);

  return (
    <>
      <SearchForProduct
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
        setSorted={setSorted}
      />
      <ProductItemContainer
        filteredProducts={filteredProducts}
        sorted={sorted}
      />
    </>
  );
};

export { MainContent };
