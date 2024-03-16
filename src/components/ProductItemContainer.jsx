const ProductItemContainer = ({ children }) => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">{children}</div>
      <div className="show-more">
        <button>Show More</button>
      </div>
    </div>
  );
};

export { ProductItemContainer };
