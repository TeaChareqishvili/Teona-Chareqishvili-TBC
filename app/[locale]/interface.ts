import React, { Dispatch } from "react";

export interface SocialLinksProps {
  justifyContent?: string;
  marginRight?: string;
}

export interface NavigationProps {
  flexDirection?: "row" | "row-reverse" | "column" | "column-reverse";
  alignItems?: string;
  marginBottom?: string;
  marginLeft?: string;
  display?: string;
  color?: string;
  fontSize?: string;
  marginRight?: string;
}

export interface Blog {
  id: number;
  title: string;
  body: string;
  userId: number;
  tags: string[];
  reactions: number;
  params: { id: string };
}

export interface PaginatedResponse extends Blog {
  total: number;
  skip: number;
  limit: number;
}

export interface FetchedBlog {
  posts: PaginatedResponse[];
}

export interface RootLayoutProps {
  children: React.ReactNode;
}

// product types

export interface ProductItemsData {
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  price: number;
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
}
export interface ProductData {
  productItems: ProductItemsData[];
  category: string;
}
export interface ProductData2 {
  productItems: ProductItemsData[];
}
export interface ProductListData {
  productItems: ProductData2;
  filteredProducts: [] | ProductData2;
}

export interface SearchForProductProps {
  filteredProducts: ProductData[];
  setFilteredProducts: Dispatch<ProductData[]>;
  productItems: ProductData[];
}

export interface ProductCard {
  imgUrl: string;
  title: string;
  brand: string;
  category: string;
  discountPercentage: number;
  price: number;
  rating: number;
  stock: number;
  id: number;
}
