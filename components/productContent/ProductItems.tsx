"use client";
// import useSaveProducts from "@/hook";
import Image from "next/image";
import Link from "next/link";
import { ProductCard } from "../../app/[locale]/interface";
import { useEffect } from "react";
import { json } from "stream/consumers";

const ProductItems = ({
  imgUrl,
  title,
  brand,
  category,
  discountPercentage,
  price,
  rating,
  stock,
  id,
}: ProductCard) => {
  // const selectedProducts = {
  //   imgUrl,
  //   title,
  //   brand,
  //   category,
  //   discountPercentage,
  //   price,
  //   rating,
  //   stock,
  //   id,
  // };

  // const { cartProducts, addProductToCart } = useSaveProducts();

  // const handleAddProduct = (newProduct: ProductCard) => {
  //   addProductToCart(newProduct);
  // };

  // console.log(cartProducts, "jandaba");
  useEffect(() => {
    const cart = window.localStorage.getItem("cart");

    if (cart === null || cart === undefined) {
      console.log("nothing");
      window.localStorage.setItem("cart", JSON.stringify([]));
    }
  }, []);

  function addToCart() {
    const cart = window.localStorage.getItem("cart");
    const parsedCart = JSON.parse(cart);

    let productExists = false;

    for (let item of parsedCart) {
      if (item.id === id) {
        item.quantity += 1;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      parsedCart.push({ id, title, price, quantity: 1 });
    }

    parsedCart.sort((a, b) => a.id - b.id);

    window.localStorage.setItem("cart", JSON.stringify(parsedCart));

    console.log(JSON.parse(window.localStorage.getItem("cart")));
  }

  return (
    <>
      <div className="item-wrapper flex flex-col items-center justify-center border border-gray-300 shadow transition-shadow  cursor-pointer  rounded p-2 mb-2 hover:shadow-lg">
        <div className="product-img">
          <Image
            className="object-fill"
            src={imgUrl}
            alt="product"
            width={100}
            height={100}
          />
          <div className="add-cart">
            <button onClick={addToCart}>ADD TO CART</button>
          </div>
          <span>Rating-{rating}</span>
        </div>
        <div>
          <p className="font-medium text green-950 font-tbc-helbetica-bold">
            {title}
          </p>
          <p className="font-base text green-950 font-tbc-helbetica-bold">
            {brand} / {category}
          </p>
          <p className="text-[#ff1f1f] font-[18px] font-tbc-helbetica-bold">
            {price}$
          </p>
          <p className="text-[#678E6C] text-base font-tbc-helvetica-bold">
            {discountPercentage}%
          </p>
          <p className="product-description">{stock} left in stock</p>
          <Link href={`/product/${id}`}>view details</Link>
        </div>
      </div>
    </>
  );
};

export { ProductItems };
