import { ProductList } from "./ProductList";

const ProductItemContainer = ({ filteredProducts, productItems }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
        <ProductList
          filteredProducts={filteredProducts}
          productItems={productItems}
        />
      </div>
    </div>
  );
};

export { ProductItemContainer };
