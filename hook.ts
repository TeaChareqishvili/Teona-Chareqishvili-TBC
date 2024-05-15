import { useEffect, useState } from "react";

const useProductCart = () => {
  const [items, setItems] = useState([]);
  const [totalProductCount, setTotalProductCount] = useState(0);

  useEffect(() => {
    const products = window.localStorage.getItem("product");

    if (products === null || products === undefined) {
      console.log("nothing");
      window.localStorage.setItem("product", JSON.stringify([]));
    } else {
      const parsedProducts = JSON.parse(products);
      setItems(parsedProducts);
      setTotalProductCount(
        parsedProducts.reduce((total, product) => total + product.quantity, 0)
      );
    }
  }, []);

  const addProductsToCart = (product) => {
    const productItem = window.localStorage.getItem("product");
    let parsedProduct = [];

    if (productItem) {
      parsedProduct = JSON.parse(productItem);
    }

    let productExists = false;

    for (let item of parsedProduct) {
      if (item.id === product.id) {
        item.quantity += 1;
        productExists = true;
        break;
      }
    }

    if (!productExists) {
      parsedProduct.push({ ...product, quantity: 1 });
    }

    parsedProduct.sort((a, b) => a.id - b.id);

    try {
      window.localStorage.setItem("product", JSON.stringify(parsedProduct));
      setItems(parsedProduct);
      setTotalProductCount(
        parsedProduct.reduce((total, product) => total + product.quantity, 0)
      ); // Update the total product count
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }

    console.log(parsedProduct, "cart");
  };

  console.log(totalProductCount, "num");

  return { addProductsToCart, items, totalProductCount };
};

export default useProductCart;

// import { useState, useEffect } from "react";
// import { ProductCard } from "./app/[locale]/interface";

// function useSaveProducts() {
//   const [cartProducts, setCartProducts] = useState<ProductCard[]>(() => {
//     // Load cart data from local storage at initialization
//     if (typeof window !== "undefined") {
//       const savedCart = localStorage.getItem("cartProducts");
//       console.log("Loaded from localStorage:", savedCart);
//       return savedCart ? JSON.parse(savedCart) : [];
//     }
//     // Default value for server-side rendering
//   });

//   useEffect(() => {
//     // Save cart data to local storage whenever it changes
//     console.log("Saving to localStorage:", cartProducts);
//     if (typeof window !== "undefined") {
//       localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
//     }
//   }, [cartProducts]);

//   const addProductToCart = (product: ProductCard) => {
//     console.log("Adding product:", product);
//     setCartProducts((currentProducts) => [...currentProducts, product]);
//   };

//   return { cartProducts, addProductToCart };
// }

// export default useSaveProducts;
