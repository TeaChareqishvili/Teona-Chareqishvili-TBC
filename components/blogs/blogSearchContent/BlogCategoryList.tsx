"use client";

import { Blogs } from "@/app/[locale]/interface";
import { useState } from "react";

export default function BlogCategoryList({ category }: { category: Blogs }) {
  console.log("Category received/???:", category);

  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const extractCategories = (category: Blogs[]): string[] => {
    const categories = category.map((blog) => blog.category);
    return Array.from(new Set(categories));
  };

  const categories = extractCategories(category);

  const handleCategoryClick = (category: string) => {
    setSelectedCategory(category);
  };

  const filteredBlogs = selectedCategory
    ? category.filter((blog) => blog.category === selectedCategory)
    : category;

  return (
    <div>
      <div className="category-list">
        {categories.map((category) => (
          <button
            className="cursor-pointer bg-black text-white mr-[10px]"
            key={category}
            onClick={() => handleCategoryClick(category)}
          >
            {category}
          </button>
        ))}
      </div>

      <div className="blog-list">
        {filteredBlogs.map((blog) => (
          <div key={blog.id}>
            <h3>{blog.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
}
