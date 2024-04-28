import React, { Dispatch, SetStateAction } from "react";

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
export interface ProductTypes {
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
  params: { id: string };
  imgUrl: string;
  discount: string;
  filteredProduct: ProductTypes[] | null;
  length: number;
}
export interface ProductData {
  filteredProduct: ProductTypes[] | null;
  length: number;
  price: number;
  brand: string;
  category: string;
  description: string;
  discountPercentage: number;
  id: number;
  images: string[];
  rating: number;
  stock: number;
  thumbnail: string;
  title: string;
  imgUrl: string;
  discount: string;
  params: { id: string };
}

export interface Data {
  productItems: ProductData[];
  filteredProducts: ProductData[] | [];
}

export interface SearchForProductProps {
  filteredProducts: ProductData[];
  setFilteredProducts: Dispatch<SetStateAction<ProductTypes[]>>;
  setSorted: Dispatch<SetStateAction<boolean | ProductData[]>>;
  productItems: ProductTypes[];
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
