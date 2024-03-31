import { ProductItems } from "./ProductItems";
import { productData } from "../projectData";

const ProductList = ({ filteredProducts }) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productData;

  console.log(filteredProducts, "filter");
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
