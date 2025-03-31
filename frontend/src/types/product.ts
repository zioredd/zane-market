export type Product = {
  id: string;
  name: string;
  description: string;
  price: number;
  category: string;
  subcategory: string;
  stock: number;
  picture?: string; // Optional field for product image
};

export type ProductCategory = {
  id: string;
  name: string;
};
