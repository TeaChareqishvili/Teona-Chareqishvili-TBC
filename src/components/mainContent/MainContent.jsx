import { SearchForProduct } from "./SearchForProduct";
import { ProductItemContainer } from "./ProductItemContainer";
import { useState } from "react";

const MainContent = () => {
  const [filteredProducts, setFilteredProducts] = useState([]);
  return (
    <>
      <SearchForProduct
        filteredProducts={filteredProducts}
        setFilteredProducts={setFilteredProducts}
      />
      <ProductItemContainer filteredProducts={filteredProducts} />
    </>
  );
};

export { MainContent };
