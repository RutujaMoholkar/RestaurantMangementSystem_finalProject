import { User } from './user.model';

export interface Order {
  orderId: number;
  totalPrice: number;
  user: User;
  orderItems: {
    orderItemId: number;
    order: {
      orderId: number;
    };
    product: {
      productId: number;
      productName: string;
      category: {
        categoryId: number;
        categoryName: string;
      };
      price: number;
    };
    quantity: number;
    unitPrice: number;
    totalPrice: number;
  }[];
}


