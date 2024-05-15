"use client";
import useProductCart from "@/hook";

const CartProducts = () => {
  const { items } = useProductCart();
  //   console.log(cartProducts, "page");
  return (
    <div className="mt-[130px] text-black">
      {items?.map((item, index) => (
        <div key={index}>
          <p>{item.title}</p>
          <p>{item.price}</p>
          <p>{item.quantity}</p>
        </div>
      ))}
    </div>
  );
};

export default CartProducts;
