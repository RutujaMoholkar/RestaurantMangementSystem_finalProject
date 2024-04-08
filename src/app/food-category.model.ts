// category.model.ts
import { Product } from './product.model';

export interface FoodCategory {
  categoryId: number;
  categoryName: string;
  products: Product[];
}
