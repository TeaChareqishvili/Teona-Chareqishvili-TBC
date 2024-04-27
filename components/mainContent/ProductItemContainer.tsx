import { ProductList } from "./ProductList";
import { Props } from "../../app/interface";

const ProductItemContainer = ({ filteredProducts, productItems }: Props) => {
  return (
    <div className="w-4/5 mx-auto mt-[30px]">
      <div className="flex items-center flex-wrap justify-between">
        <ProductList
          filteredProducts={filteredProducts}
          productItems={productItems}
        />
      </div>
    </div>
  );
};

export { ProductItemContainer };
