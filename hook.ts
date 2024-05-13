//import { ProductCard } from "./app/[locale]/interface";

// function useCart() {
//   const [cartProducts, setCartProducts] = useState<ProductCard[]>(() => {
//     // Load cart data from local storage at initialization
//     if (typeof window !== "undefined") {
//       try {
//         const savedCart = localStorage.getItem("cartProducts");
//         console.log("Loaded from localStorage:", savedCart);
//         return savedCart ? JSON.parse(savedCart) : [];
//       } catch (error) {
//         console.error("Failed to parse cart products:", error);
//         return [];
//       }
//     }
//   });

//   useEffect(() => {
//     // Save cart data to local storage whenever it changes
//     if (typeof window !== "undefined") {
//       try {
//         console.log("Saving to localStorage:", cartProducts);
//         localStorage.setItem("cartProducts", JSON.stringify(cartProducts));
//       } catch (error) {
//         console.error("Failed to save cart products:", error);
//       }
//     }
//   }, [cartProducts]);

//   const addProductToCart = (product: ProductCard) => {
//     console.log("Adding product:", product);
//     setCartProducts(currentProducts => {
//       try {
//         // This block isn't typically necessary but added for uniformity
//         return [...currentProducts, product];
//       } catch (error) {
//         console.error("Error adding product to cart:", error);
//         return currentProducts; // Return the current state if an error occurs
//       }
//     });
//   };

//   return { cartProducts, addProductToCart };
// }

// export default useCart;

// export function useSaveProducts(key: string, initialValue: any) {
//   const [value, setValue] = useState(() => {
//     if (typeof window === "undefined") return initialValue;

//     try {
//       const storedValue = window.localStorage.getItem(key);
//       return storedValue ? JSON.parse(storedValue) : initialValue;
//     } catch (error) {
//       return initialValue;
//     }
//   });

//   useEffect(() => {
//     if (typeof window !== "undefined") {
//       window.localStorage.setItem(key, JSON.stringify(value));
//     }
//   }, [key, value]);

//   return [value, setValue];
// }
import { useReducer, useEffect } from "react";
import reducer from "./reducer";

export function useSaveProducts() {
  const initialState = () => {
    const storedCart = localStorage.getItem("cart");
    return storedCart ? JSON.parse(storedCart) : [];
  };

  const [cart, dispatch] = useReducer(reducer, initialState());

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  return [cart, dispatch];
}
