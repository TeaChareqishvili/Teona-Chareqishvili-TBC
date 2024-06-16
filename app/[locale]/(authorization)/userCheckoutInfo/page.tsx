"use server";
import { getUserInfo } from "@/apiUsers";
import UserCheckOutForm from "../../../../components/userProfile/UserCheckOutForm";
import { getProducts, getUserCart } from "@/apiUsers";
import { SelectedProduct } from "../../interface";

export default async function UserCheckoutInfo() {
  const userForm = await getUserInfo();

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

  console.log(userForm);
  return (
    <div className="min-h-screen mt-[60px] p-[30px]">
      <UserCheckOutForm
        userForm={userForm}
        filteredProducts={filteredProducts}
      />
    </div>
  );
}
