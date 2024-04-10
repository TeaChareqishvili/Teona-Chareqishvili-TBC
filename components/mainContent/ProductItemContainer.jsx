import { ProductList } from "./ProductList";

const ProductItemContainer = ({ filteredProducts, productItems, loaded }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
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
