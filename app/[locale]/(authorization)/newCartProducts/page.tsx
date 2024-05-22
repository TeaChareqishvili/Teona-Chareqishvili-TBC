import { getProducts, getUserCart } from "@/apiUsers";
import { DeleteAll } from "@/components/productButtons/DeleteAll";
import { SingleProductButtons } from "@/components/productButtons/SingleProductButtons";
import { SelectedProduct } from "../../interface";
import Image from "next/image";
import productImg from "../../../../public/assets/image/blogImages/blog3.webp";

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
    .filter((product: SelectedProduct) =>
      cartProductMap.has(product.id.toString())
    )
    .map((product: SelectedProduct) => ({
      ...product,
      quantity: cartProductMap.get(product.id.toString()),
    }));
  //   console.log(filteredProducts, "filteredproducts");
  return (
    <div className="mt-[110px] flex items-center justify-center flex-col m-auto w-full bg-[#dad7cd]">
      <h1 className="text-[#7a7973] mt-[30px] font-bold italic mb-[20px]">
        Check Out
      </h1>
      {filteredProducts.map((product: SelectedProduct) => (
        <div
          key={product.id}
          className="product-item text-[black] border border-white  flex  items-center   mb-[15px] w-4/5 rounded-md"
        >
          <div className=" w-full flex items-center justify-aorund">
            <Image
              width={250}
              height={250}
              src={productImg}
              alt="bag"
              className="rounded-lg p-[20px] mr-[20px]"
            />
            <div className="ml-[40px] text-[white]">
              {" "}
              <p className="text-white">{product.title}</p>
              <p>{product.category}</p>
              <p>${product.price}</p>
              <p>In Stock: {product.stock}</p>
              <p>Quantity-{product.quantity}</p>
            </div>
            <p className="flex flex-col items-center ml-[40px] text-[white]">
              {" "}
              Total Price
              <span className="text-[white]">
                ${" "}
                {((product.quantity || 0) * parseFloat(product.price)).toFixed(
                  2
                )}
              </span>
            </p>
          </div>
          <SingleProductButtons id={product.id} />
        </div>
      ))}
      <DeleteAll />
    </div>
  );
}
