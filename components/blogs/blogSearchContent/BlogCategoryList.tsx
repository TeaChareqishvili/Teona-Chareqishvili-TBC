"use client";
// import { motion } from "framer-motion";

export default function BlogCategoryList({ category }: { category: any }) {
  console.log("Category received/???:", category);
  //   const uniqueCategories = [...new Set(categorymap((cat) => cat))];
  //   console.log(uniqueCategories, "unique categories");
  return (
    <div className="flex flex-wrap justify-center w-[400px]">
      {/* {category.map((item) => (
        <div key={item.id}>
          <p>{category.category}</p>
        </div>
      ))} */}
    </div>
  );
}
