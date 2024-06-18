import { getUserInfo, getUserCart, getProducts } from "@/apiUsers";
import { SelectedProduct } from "../../interface";
import UserCheckOutForm from "@/components/userProfile/UserCheckOutForm";

export default async function UserCheckOutInfo() {
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

  return (
    <div>
      <UserCheckOutForm
        userForm={userForm}
        filteredProducts={filteredProducts}
      />
    </div>
  );
}
