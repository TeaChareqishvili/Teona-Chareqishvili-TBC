import { getProductDetail, getProducts } from "@/apiUsers";
import EditProductButton from "@/components/productButtons/EditProductButton";
import ShareSocial from "../../../../../components/socilaMediaShare/ShareSocial";
import { getSession } from "@auth0/nextjs-auth0";
import SingleProductAddComment from "@/components/reviews/Reviews";
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

  const isAdmin =
    Array.isArray(session?.user.role) && session?.user.role.includes("admin");
  const img: string[] = product[0].image_gallery;
  const productId = product[0].id;

  return (
    <div className=" w-full lg:mt-[140px] lg:min-h-screen">
      <SingleProduct img={img} product={product} reviews={reviews} />
      <ShareSocial products={product} />
      <SingleProductAddComment id={id} />
      {isAdmin && <EditProductButton id={productId} productDetail={product} />}
    </div>
  );
}
