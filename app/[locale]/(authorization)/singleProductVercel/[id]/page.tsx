import { getProductDetail, getProducts } from "@/apiUsers";
import EditProductButton from "@/components/productButtons/EditProductButton";
import ShareSocial from "../../../../../components/socilaMediaShare/ShareSocial";
import { getSession } from "@auth0/nextjs-auth0";

import SingleProduct from "@/components/newProductVercel/SingleProduct";
import { VercelProduct } from "../../../../../app/[locale]/interface";

export async function generateMetadata({ params }: any) {
  const productsData = await getProducts();
  const product = productsData.find(
    (product: VercelProduct) => product.id == params.id
  );

  return {
    title: `${product.title}`,
    description: `${product.description}`,
  };
}

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, reviews } = await getProductDetail(id);
  const session = await getSession();
  console.log(reviews, "page");

  const isAdmin =
    Array.isArray(session?.user.role) && session?.user.role.includes("admin");
  const img: string[] = product[0].image_gallery;
  const productId = product[0].id;

  console.log(product, "img");

  return (
    <div className=" w-full lg:mt-[90px] lg:min-h-screen dark:bg-[#2E3944] bg-[#D3D9D4] flex flex-col items-center">
      <SingleProduct img={img} product={product} reviews={reviews} />{" "}
      <ShareSocial products={product} id={id} />
      {isAdmin && <EditProductButton id={productId} productDetail={product} />}
    </div>
  );
}
