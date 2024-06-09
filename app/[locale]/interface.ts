import React, { Dispatch } from "react";

export interface SocialLinksProps {
  justifyContent?: string;
  marginRight?: string;
  marginTop?: string;
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
  price: number;
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

// vercel
export interface VercelProduct {
  id: number;
  title: string;
  price: string;
  stock: number;
  category: string;
  imageurl: string;
}
export interface NewProductProps {
  product: VercelProduct[];
}

export interface DetailProductData {
  id?: number;
  title: string;
  description: string;
  price: string;
  stock: number;
  category: string;
  imageurl: string;
  sale: string;
}
export interface AddToCartButtonProps {
  productId: number;
  handleAddToCart: (productId: any) => void;
}

interface ProductCart {
  [key: string]: number;
}

export interface Cart {
  shop: ProductCart;
}

export interface SelectedProduct {
  id: number;
  title: string;
  price: any;
  stock: number;
  category: string;
  quantity: number;
  imageurl: string;
}

export interface Blogs {
  id: number;
  title: string;
  date: string;
  category: string;
  image_url: string;
}

export interface contactData {
  name: string;
  email: string;
  phone: string;
  message: any;
}

export interface SingleBlogData {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
  image_url: string;
}

export interface CreateBlogData {
  title: string;
  description: string;
  image_url: string;
  category: string;
}
