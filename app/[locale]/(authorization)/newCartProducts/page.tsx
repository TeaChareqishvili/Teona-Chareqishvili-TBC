import { getProducts, getUserCart } from "@/apiUsers";

export default async function NewCartProducts() {
  const cart = await getUserCart(46);
  const cartProductsArray = Object.entries(cart.products); // Assuming this is the format: [[ '1', 2 ], [ '9', 3 ]]
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
    <div className="mt-[130px]">
      <h1 className="text-black">NewCartProducts</h1>
      {/* {filteredProducts.map((product) => (
        <div key={product.id} className="product-item">
          <p>{product.title}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>In Stock: {product.stock}</p>
        </div>
      ))} */}
    </div>
  );
}
