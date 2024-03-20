import { ProductList } from "./ProductList";

const ProductItemContainer = () => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
        <ProductList />
      </div>
      <div className="show-more">
        <button>Show More</button>
      </div>
    </div>
  );
};

export { ProductItemContainer };
