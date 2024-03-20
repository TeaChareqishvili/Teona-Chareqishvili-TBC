import { ProductItems } from "./ProductItems";
import { productData } from "../projectData";

const ProductList = () => {
  return (
    <>
      {productData.map((item) => (
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
