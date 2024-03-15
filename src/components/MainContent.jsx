import { SearchProduct } from "./SearchProduct";
import { ProductContainer } from "./products/ProductContainer";

const MainContent = () => {
  return (
    <main>
      <SearchProduct />
      <ProductContainer />
    </main>
  );
};

export { MainContent };
