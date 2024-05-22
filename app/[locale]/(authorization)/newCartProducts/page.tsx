import { getProducts, getUserCart } from "@/apiUsers";
import { SingleProductButton } from "@/components/productButtons/SingleProductButtons";
export default async function NewCartProducts() {
  const cart = await getUserCart(46);
  const cartProductsArray = Object.entries(cart.products);
  console.log(cartProductsArray, "products");

  const cartProducts = await getProducts();
  //   console.log(cartProducts, "all products");

  // Create a map of cart product IDs and their quantities
  const cartProductMap = new Map(cartProductsArray);

  // Filter and map the products to include the quantity
  const filteredProducts = cartProducts
    .filter((product) => cartProductMap.has(product.id.toString()))
    .map((product) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));
  console.log(filteredProducts, "filteredproducts");
  return (
    <div className="mt-[130px] flex items-center justify-center flex-col m-auto">
      <h1 className="text-black">NewCartProducts</h1>
      {filteredProducts.map((product) => (
        <div
          key={product.id}
          className="product-item text-[black] border border-black w-[200px] flex flex-col items-center mb-[15px]"
        >
          <p className="text-black">{product.title}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>In Stock: {product.stock}</p>
          <p>Quantity:{product.quantity}</p>
          <SingleProductButton id={product.id} />
        </div>
      ))}
    </div>
  );
}
