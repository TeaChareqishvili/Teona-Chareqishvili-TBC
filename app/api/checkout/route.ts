import { getProducts } from "@/apiUsers";
import { getUserCart } from "@/apiUsers";
import { NextResponse } from "next/server";
const stripe = require("stripe")(process.env.STRIPE_SECRET);
import { SelectedProduct } from "../../[locale]/interface";

export const POST = async (_request: any) => {
  const cart = await getUserCart();

  const cartProductsArray = Object.entries(cart.shop);

  const cartProducts = await getProducts();

  // //Create a map of cart product IDs and their quantities
  const cartProductMap = new Map(cartProductsArray);

  //Filter and map the products to include the quantity
  const filteredProducts = cartProducts
    .filter((product: SelectedProduct) =>
      cartProductMap.has(product.id.toString())
    )
    .map((product: SelectedProduct) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));

  const prods = await stripe.filteredProducts.list();
  console.log(prods, "prods");

  return NextResponse.json({ url: "" });
};
