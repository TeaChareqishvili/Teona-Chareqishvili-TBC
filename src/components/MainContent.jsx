import { SearchForProduct } from "./SearchForProduct";
import { ProductContainer } from "./products/ProductContainer";

const MainContent = () => {
  return (
    <main>
      <SearchForProduct />
      <ProductContainer />
    </main>
  );
};

export { MainContent };
