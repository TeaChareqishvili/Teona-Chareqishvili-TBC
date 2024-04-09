import Image from "next/image";

const ProductItems = ({
  imgUrl,
  title,
  brand,
  category,
  discount,
  description,
  price,
  rating,
  stock,
}) => {
  return (
    <>
      <div className="item-wrapper">
        <div className="product-img">
          <Image src={imgUrl} alt="product" />
          <div className="add-cart">
            <button>ADD TO CART</button>
          </div>
          <span>{type}</span>
        </div>
        <div>
          <p className="product-title">{title}</p>
          <p className="product-price">{price}</p>
          <p className="product-description">{description}</p>
        </div>
      </div>
    </>
  );
};

export { ProductItems };
