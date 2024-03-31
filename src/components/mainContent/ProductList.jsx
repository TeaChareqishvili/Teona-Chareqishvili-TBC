import { ProductItems } from "./ProductItems";

const ProductList = ({ filteredProducts, sorted }) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : sorted;

  return (
    <>
      {productsToRender.map((item) => (
        <ProductItems
          key={item.id}
          imgUrl={item.imgUrl}
          title={item.title}
          description={item.description}
          price={item.price}
          type={item.type}
        />
      ))}
    </>
  );
};

export { ProductList };
