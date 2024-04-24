import { ProductList } from "./ProductList";

const ProductItemContainer = ({ filteredProducts, productItems, loaded }) => {
  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <div className="flex items-center flex-wrap justify-between">
        <ProductList
          filteredProducts={filteredProducts}
          productItems={productItems}
          loaded={loaded}
        />
      </div>
    </div>
  );
};

export { ProductItemContainer };
