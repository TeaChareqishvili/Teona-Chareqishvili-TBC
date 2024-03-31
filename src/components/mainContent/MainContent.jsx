import { SearchForProduct } from "./SearchForProduct";
import { ProductItemContainer } from "./ProductItemContainer";
import { useState } from "react";
import { productData } from "../projectData";

const MainContent = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [sorted, setSorted] = useState([...productData]);
  console.log(sorted, "sorted state");
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
