export interface Product {
  productId: number;
  productName: string;
  category: {
    categoryId: number;
    categoryName: string;
  };
  price: number;
}