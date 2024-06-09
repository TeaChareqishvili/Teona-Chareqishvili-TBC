import { getProductDetail } from "@/apiUsers";
import EditProductButton from "@/components/productButtons/EditProductButton";
import ShareSocial from "../../../../../components/socilaMediaShare/ShareSocial";
// import Image from "next/image";

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const productDetail = await getProductDetail(id);
  // const img = productDetail.image_gallery;
  console.log(productDetail);
  // console.log(img);

  return (
    <div className="mt-[140px]">
      <h1 className="text-[black]">{productDetail.title}</h1>
      {/* {img.map((item, index) => (
        <Image
          width={200}
          height={200}
          key={index}
          src={item}
          alt={`Product image ${index + 1}`}
        />
      ))} */}
      <ShareSocial products={productDetail} />
      <EditProductButton id={productDetail.id} productDetail={productDetail} />
    </div>
  );
}
