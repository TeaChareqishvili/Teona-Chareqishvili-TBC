import { ProductItems } from "./ProductItems";
import { Props } from "../../app/interface";

const ProductList = ({ filteredProducts, productItems }: Props) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productItems;

  console.log(filteredProducts, "3");
  console.log(productsToRender, "4");
  return (
    <>
      {productsToRender.map((item) => (
        <ProductItems
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          discount={item.discountPercentage}
          price={item.price}
          rating={item.rating}
          imgUrl={item.images[0]}
          stock={item.stock}
          id={item.id}
        />
      ))}
    </>
  );
};

export { ProductList };

// TODO fix this shit
