import { ProductItems } from "./ProductItems";
import bag from "../../assets/image/productImg/bag.webp";
import jeans2 from "../../assets/image/productImg/jeans2.webp";
import watch from "../../assets/image/productImg/watch.webp";
import watch2 from "../../assets/image/productImg/watch2.webp";
import bag2 from "../../assets/image/productImg/bag2.webp";
import bag3 from "../../assets/image/productImg/bag3.webp";
import shoes from "../../assets/image/productImg/shoes.webp";
import tShirt from "../../assets/image/productImg/T-shirt.webp";
import tShirt2 from "../../assets/image/productImg/T-shirt2.webp";
import jeans from "../../assets/image/productImg/jeans.webp";

const ProductContainer = () => {
  return (
    <div className="product-item-wrapper">
      <div className="product-item-container">
        <ProductItems
          imgUrl={bag}
          title="bag"
          description="Lorem ipsum dolor sit amet"
          price="79$"
          type="New"
        />
        <ProductItems
          imgUrl={jeans2}
          title="Jeans"
          description="Lorem ipsum dolor sit amet"
          price="154$"
          type="Sale"
        />
        <ProductItems
          imgUrl={watch}
          title="Watch"
          description="Lorem ipsum dolor sit amet"
          price="454$"
          type="Sold"
        />
        <ProductItems
          imgUrl={watch2}
          title="Watch"
          description="Lorem ipsum dolor sit amet"
          price="354$"
          type="New"
        />
        <ProductItems
          imgUrl={bag2}
          title="bag"
          description="Lorem ipsum dolor sit amet"
          price="57$"
          type="New"
        />
        <ProductItems
          imgUrl={tShirt}
          title="T-shirt"
          description="Lorem ipsum dolor sit amet"
          price="57$"
          type="New"
        />
        <ProductItems
          imgUrl={bag3}
          title="bag"
          description="Lorem ipsum dolor sit amet"
          price="57$"
          type="Sale"
        />
        <ProductItems
          imgUrl={shoes}
          title="shoes"
          description="Lorem ipsum dolor sit amet"
          price="57$"
          type="New"
        />
        <ProductItems
          imgUrl={jeans}
          title="Jeans"
          description="Lorem ipsum dolor sit amet"
          price="99$"
          type="Sale"
        />
        <ProductItems
          imgUrl={tShirt2}
          title="T-shirt"
          description="Lorem ipsum dolor sit amet"
          price="57$"
          type="Sold"
        />
      </div>
      <div className="show-more">
        <button>Show More</button>
      </div>
    </div>
  );
};

export { ProductContainer };
