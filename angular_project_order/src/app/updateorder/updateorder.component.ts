import { Component } from '@angular/core';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { OrderService } from '../service/order.service';
import { Order } from '../model/order';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'updateOrder',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './updateOrder.component.html',
  styleUrl: './updateOrder.component.css'
})
export class UpdateOrderComponent {

  OrderForm!: FormGroup;
  OrderV1Service!: OrderService;
  fb!: FormBuilder;

  Order!:Order;

  router: Router;
  route: ActivatedRoute;

  constructor(router: Router, route: ActivatedRoute, OrderService: OrderService, fb: FormBuilder, ) {
    this.OrderV1Service = OrderService;
    this.fb =fb;
    this.route=route; 
    this.router=router;
  }

  ngOnInit(): void {

    this.route.paramMap.subscribe(

      params => {
        const OrderId = params.get('OrderId');

        if (OrderId !== null) {
          this.OrderV1Service.getOrder(Number(OrderId)).subscribe(
            ord => {
              this.Order = ord;
              this.OrderForm = this.fb.group(
                {
                  OrderName: ['', [Validators.required, Validators.minLength(3)]],
                  Orderbrand: ['', [Validators.required, Validators.minLength(3)]],
                  Ordersymptom: ['', [Validators.required, Validators.minLength(3)]]
                }
              );             
            },

            err => console.log(err)
          );
        }

      }
    );
  }

  updateOrder= ():void =>  {
    let name=this.OrderForm.value.OrderName;
    let brand = this.OrderForm.value.Orderbrand;
    let symptom = this.OrderForm.value.Ordersymptom;
    this.OrderV1Service.updateOrder(this.Order.id,name,brand,symptom).subscribe(
      result => this.router.navigate(['/list-Orders']),
      error => console.error('Error adding Order:', error)
    );

  }


}
