import { Component, OnInit } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { User } from '../user.model';
import { Order } from '../order.model';
import { OrdersService } from '../services/orders.service';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-orders',
  imports: [NgFor, NgIf, FormsModule],
  standalone: true,
  templateUrl: './orders.component.html',
  styleUrls: ['./orders.component.css']
})
export class OrdersComponent implements OnInit {

  orders: Order[] = [];//initialize order array
  selectedOrder: Order | undefined;

  constructor(private orderService: OrdersService) { }

  ngOnInit(): void {
    this.fetchOrders();
  }

  fetchOrders() {
    this.orderService.getAllOrders().subscribe(
      (data: Order[]) => {
        this.orders = data;
      },
      (error) => {
        console.error('Error loading orders:', error);
      }
    );
  }

  viewOrderDetails(order: Order) {
    if (this.selectedOrder === order) {
      this.selectedOrder = undefined;
    } else {
      this.selectedOrder = order;
    }
  }

  deleteOrder(order: Order) {
    if (confirm('Are you sure you want to delete this order?')) {
      this.orderService.deleteOrder(order.orderId).subscribe(
        () => {
          this.orders = this.orders.filter(o => o.orderId !== order.orderId);
          console.log('Order deleted successfully.');
        },
        (error) => {
          console.error('Error deleting order:', error);
        }
      );
    }
  }

  editOrder(order: Order) {
    this.selectedOrder = order;
  }


  updateOrder(order: Order) {
    this.orderService.updateOrder(order).subscribe(
      () => {
        console.log('Order updated successfully');
        // Optionally, reload the orders after update
        this.fetchOrders();
      },
      (error) => {
        console.error('Error updating order:', error);
      }
    );
  }
  // viewOrderDetails(order: any) {
  //   if (this.selectedOrder === order) {
  //     this.selectedOrder = null;
  //   } else {
  //     // Fetch user information for the selected order
  //     this.orderService.getUserDetails(order.userId).subscribe(
  //       (user: any) => {
  //         order.user = user; // Assign user details to the order
  //         this.selectedOrder = order;
  //       },
  //       (error) => {
  //         console.error('Error loading user details:', error);
  //       }
  //     );
  //   }
  // }

}












