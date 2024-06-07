import { getProductDetail } from "@/apiUsers";
import EditProductButton from "@/components/productButtons/EditProductButton";

export default async function SingeleProductVercel({
  params: { id },
}: {
  params: { id: string };
}) {
  const productDetail = await getProductDetail(id);
  console.log(productDetail, "pro");
  return (
    <div className="mt-[140px]">
      <h1 className="text-[black]">{productDetail.title}</h1>
      <EditProductButton id={productDetail.id} productDetail={productDetail} />
    </div>
  );
}
