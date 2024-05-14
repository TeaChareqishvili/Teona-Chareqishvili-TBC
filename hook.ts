import { useState, useEffect } from "react";
import { ProductCard } from "./app/[locale]/interface";

function useSaveProducts() {
  const [cartProducts, setCartProducts] = useState<ProductCard[]>(() => {
    // Load cart data from local storage at initialization
    if (typeof window !== "undefined") {
      const savedCart = localStorage.getItem("cartProducts");
      console.log("Loaded from localStorage:", savedCart);
      return savedCart ? JSON.parse(savedCart) : [];
    }
    // Default value for server-side rendering
  });

  useEffect(() => {
    // Save cart data to local storage whenever it changes
    console.log("Saving to localStorage:", cartProducts);
    if (typeof window !== "undefined") {
      localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
    }
  }, [cartProducts]);

  const addProductToCart = (product: ProductCard) => {
    console.log("Adding product:", product);
    setCartProducts((currentProducts) => [...currentProducts, product]);
  };

  return { cartProducts, addProductToCart };
}

export default useSaveProducts;
