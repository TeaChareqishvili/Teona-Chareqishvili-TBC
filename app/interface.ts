export interface SocialLinksProps {
  justifyContent?: string;
  marginRight?: string;
}

export interface NavigationProps {
  flexDirection?: string;
  alingItems?: string;
  marginBottom?: string;
  marginLeft?: string;
  display?: string;
  color?: string;
  fontSize?: string;
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
}
export interface ProductProps extends ProductTypes {
  imgUrl: string;
  discount: string;
}
export interface FetchedProducts {
  fetched: ProductProps[];
}

export interface FilteredProducts extends FetchedProducts {
  filteredProducts: [] | null;
}

export interface Props {
  filteredProducts: FilteredProducts;
  productItems: FetchedProducts;
}
