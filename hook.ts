import { useEffect, useState } from "react";

export interface Card {
  id: number;
  price: number;
  title: string;
  imgUrl: string;
  quantity: number;
  brand: string;
}

const useProductCart = () => {
  const [items, setItems] = useState<Card[]>([]);
  const [totalProductCount, setTotalProductCount] = useState<number | null>(
    null
  );

  useEffect(() => {
    const products = window.localStorage.getItem("product");

    if (products === null || products === undefined) {
      console.log("nothing");
      window.localStorage.setItem("product", JSON.stringify([]));
    } else {
      const parsedProducts: Card[] = JSON.parse(products);
      setItems(parsedProducts);
      setTotalProductCount(
        parsedProducts.reduce((total, product) => total + product.quantity, 0)
      );
    }

    const handleStorageChange = (e: StorageEvent) => {
      if (e.key === "product") {
        const parsedProducts: Card[] = JSON.parse(e.newValue || "[]");
        setItems(parsedProducts);
        setTotalProductCount(
          parsedProducts.reduce((total, product) => total + product.quantity, 0)
        );
      }
    };

    window.addEventListener("storage", handleStorageChange);

    return () => {
      window.removeEventListener("storage", handleStorageChange);
    };
  }, []);

  const dispatchCartEvent = () => {
    const event = new Event("cartUpdated");
    window.dispatchEvent(event);
  };

  const updateLocalStorage = (products: Card[]) => {
    try {
      window.localStorage.setItem("product", JSON.stringify(products));
      setItems(products);
      setTotalProductCount(
        products.reduce((total, product) => total + product.quantity, 0)
      );
      dispatchCartEvent();
    } catch (error) {
      console.error("Error saving to localStorage", error);
    }
  };

  const addProductsToCart = (product: Card) => {
    const productItem = window.localStorage.getItem("product");
    let parsedProduct: Card[] = [];

    if (productItem) {
      parsedProduct = JSON.parse(productItem) as Card[];
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
    updateLocalStorage(parsedProduct);

    console.log(parsedProduct, "cart");
  };

  const incrementProductQuantity = (productId: number) => {
    const updatedItems = items.map((item) =>
      item.id === productId ? { ...item, quantity: item.quantity + 1 } : item
    );
    updateLocalStorage(updatedItems);
  };

  const decrementProductQuantity = (productId: number) => {
    const updatedItems = items
      .map((item) =>
        item.id === productId && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : item
      )
      .filter((item) => item.quantity > 0);
    updateLocalStorage(updatedItems);
  };

  const clearCart = () => {
    window.localStorage.removeItem("product");
    setItems([]);
    setTotalProductCount(0);
    dispatchCartEvent();
  };

  return {
    addProductsToCart,
    items,
    totalProductCount,
    incrementProductQuantity,
    decrementProductQuantity,
    clearCart,
  };
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
