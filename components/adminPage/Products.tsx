"use client";
import Link from "next/link";
import { VercelProduct, NewProductProps } from "../../app/[locale]/interface";
import Image from "next/image";
import ProductDeleteAdmin from "../../components/productButtons/ProductDeleteAdmin";

export default function Products({ product }: NewProductProps) {
  return (
    <div className="container mx-auto p-4">
      <div className="overflow-x-auto">
        <table className="w-full bg-white dark:bg-[#212A31] border border-gray-300 dark:border-gray-700 shadow-md rounded-lg">
          <thead className="bg-gray-100 dark:bg-gray-800">
            <tr>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Image
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Title
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Category
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-left">
                Price
              </th>
              <th className="p-4 border-b dark:border-gray-700 text-center">
                Actions
              </th>
            </tr>
          </thead>
          <tbody>
            {product?.map((product: VercelProduct) => (
              <tr
                key={product.id}
                className="hover:bg-gray-50 dark:hover:bg-gray-700 transition-colors"
              >
                <td className="p-4 border-b dark:border-gray-700">
                  <div className="w-[100px] h-[100px]">
                    <Image
                      width={100}
                      height={100}
                      src={product.imageurl}
                      alt={product.title}
                      className="rounded-lg w-full h-full object-cover"
                    />
                  </div>
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  {product.title}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  {product.category}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-gray-900 dark:text-gray-100">
                  ${product.price}
                </td>
                <td className="p-4 border-b dark:border-gray-700 text-center">
                  <div className="flex flex-col sm:flex-row sm:space-x-2 space-y-2 sm:space-y-0 justify-center items-center">
                    <Link
                      className="dark:text-[#2E3944] text-white px-4 py-2 bg-[#2E3944] dark:bg-[#D3D9D4] rounded-md hover:bg-[#517191] dark:hover:bg-[#a6aba7] transition-colors duration-200"
                      href={`/singleProductVercel/${product.id}`}
                    >
                      Details
                    </Link>
                    <ProductDeleteAdmin id={product.id} />
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
