import { getProductDetail } from "@/apiUsers";

// import EditProductButton from "@/components/productButtons/EditProductButton";
// import ShareSocial from "../../../../../components/socilaMediaShare/ShareSocial";
// import Image from "next/image";
import SingleProductAddComment from "@/components/reviews/Reviews";
import SingleProduct from "@/components/newProductVercel/SingleProduct";
// import { getReviews } from "../../../../../apiUsers";

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, reviews } = await getProductDetail(id);
  const img: string[] = product[0].image_gallery;
  console.log(reviews, "hhh");
  console.log(img, "img");
  console.log(product[0], "product");
  // const reviews = await getReviews(id);
  // console.log(reviews, "rev");

  return (
    <div className=" w-full lg:mt-[140px] lg:min-h-screen">
      <SingleProduct img={img} product={product} reviews={reviews} />
      <SingleProductAddComment id={id} />
      {/* <ShareSocial products={product} />
      <EditProductButton id={product.id} productDetail={product} /> */}
    </div>
  );
}
