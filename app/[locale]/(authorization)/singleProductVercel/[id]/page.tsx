import { getProductDetail } from "@/apiUsers";

import EditProductButton from "@/components/productButtons/EditProductButton";
import ShareSocial from "../../../../../components/socilaMediaShare/ShareSocial";
import Image from "next/image";
import SingleProductAddComment from "@/components/reviews/Reviews";
// import { getReviews } from "../../../../../apiUsers";

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const { product, reviews } = await getProductDetail(id);
  const img: string[] = product?.image_gallery;
  console.log(reviews, "hhh");

  console;
  // const reviews = await getReviews(id);
  // console.log(reviews, "rev");

  return (
    <div className="mt-[140px]">
      <h1 className="text-[black]">{product.title}</h1>
      {img?.map((item, index) => (
        <Image
          width={200}
          height={200}
          key={index}
          src={item}
          alt={`Product image ${index + 1}`}
        />
      ))}
      <SingleProductAddComment id={id} />
      <ShareSocial products={product} />
      <EditProductButton id={product.id} productDetail={product} />
    </div>
  );
}
