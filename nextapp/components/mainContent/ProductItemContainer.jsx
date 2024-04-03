import { ProductList } from "./ProductList";

const ProductItemContainer = ({ filteredProducts, sorted }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
        <ProductList filteredProducts={filteredProducts} sorted={sorted} />
      </div>
      <div className="show-more">
        <button>Show More</button>
      </div>
    </div>
  );
};

export { ProductItemContainer };