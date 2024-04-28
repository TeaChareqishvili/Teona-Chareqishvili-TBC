import { ProductItems } from "./ProductItems";
// import { Check } from "../../app/interface";

const ProductList = ({ filteredProducts, productItems }) => {
  // const productsToRender =
  //   filteredProducts.length > 0 ? filteredProducts : productItems;
  const productsToRender = filteredProducts?.filteredProducts ?? productItems;
  // console.log(productsToRender, "render");
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

// TODO fix this shit
