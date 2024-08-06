import { Component, OnInit } from '@angular/core';
import { Order } from '../model/order';
import { OrderService } from '../service/Order.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'Orderlist',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './Orderlist.component.html',
  styleUrl: './Orderlist.component.css'
})
export class OrderlistComponent implements OnInit {

  Orders!: Order[];

  OrderService!: OrderService;

  constructor(OrderService: OrderService) {
    this.OrderService = OrderService;
  }


  ngOnInit(): void {
    this.Orders = this.OrderService.getAllOrders();
  }

  deleteOrder = (id:number ) => {    
    this.OrderService.deleteOrder(id);
    this.Orders = this.OrderService.getAllOrders();
   }

  

}
