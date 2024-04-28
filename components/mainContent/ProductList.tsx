import { Data } from "@/app/interface";
import { ProductItems } from "./ProductItems";

const ProductList = ({ filteredProducts, productItems }: Data) => {
  const productsToRender =
    filteredProducts.length > 0 ? filteredProducts : productItems;

  // ProductItems  რატომ წერს რომ არ გადაეცემა პროპერთები როცა გადაეცემა ტიპში ვერ გავიგე
  return (
    <>
      {productsToRender.map((item) => (
        <ProductItems
          key={item.id}
          title={item.title}
          brand={item.brand}
          category={item.category}
          discountPercentage={item.discountPercentage}
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
