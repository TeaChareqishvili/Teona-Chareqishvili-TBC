// import Image from "next/image";
import Link from "next/link";
import { AddProductToCart } from "../productButtons/AddProductToCart";
import { VercelProduct } from "../../app/[locale]/interface";
import { handleAddToCart } from "../../app/[locale]/actions";
import productImg from "../../public/assets/image/blogImages/blog3.webp";
import Image from "next/image";
export default function NewProduct({ product }: any) {
  return (
    <>
      {product?.map((product: VercelProduct) => (
        <div
          key={product.id}
          className="border border-black w-[300px]  mx-[15px] my-[20px] p-[15px] flex items-center flex-col"
        >
          <Image width={200} height={200} src={productImg} alt="bag" />
          <p className="text-[black]">{product.title}</p>
          <p>{product.category}</p>
          <p>${product.price}</p>
          <p>In Stock: {product.stock}</p>
          <Link
            className="border border-black text-[black] mt-[10px] px-[10px] py-[7px]"
            href={`/singleProductVercel/${product.id}`}
          >
            view details
          </Link>

          <AddProductToCart
            productId={product.id}
            handleAddToCart={handleAddToCart}
          />
        </div>
      ))}
    </>
  );
}
