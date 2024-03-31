import { ProductList } from "./ProductList";

const ProductItemContainer = ({ filteredProducts }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
        <ProductList filteredProducts={filteredProducts} />
      </div>
      <div className="show-more">
        <button>Show More</button>
      </div>
    </div>
  );
};

export { ProductItemContainer };
