import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormBuilder, FormGroup, FormsModule, ReactiveFormsModule, Validators } from '@angular/forms';
import { OrderService } from '../service/Order.service';
import { Router } from '@angular/router';

@Component({
  selector: 'Order',
  standalone: true,
  imports: [CommonModule, FormsModule,ReactiveFormsModule],
  templateUrl: './Order.component.html',
  styleUrl: './Order.component.css'
})
export class AddOrderComponent {

  OrderForm!: FormGroup;
  OrderService!: OrderService;
  fb!: FormBuilder;

  router: Router;

  constructor(router: Router, OrderService: OrderService, fb: FormBuilder, ) {
    this.OrderService = OrderService;
    this.fb =fb;
    this.router=router;
    
    this.OrderForm = this.fb.group(
      {
        OrderName: ['', [Validators.required, Validators.minLength(3)]],
        Orderbrand: ['', [Validators.required, Validators.minLength(3)]],
        Ordersymptom: ['', [Validators.required, Validators.minLength(3)]]
      }
    );
  }

  addOrder= ():void =>  {
    let name=this.OrderForm.value.OrderName;
    let brand = this.OrderForm.value.Orderbrand;
    let symptom = this.OrderForm.value.Ordersymptom;
    
    this.OrderService.addOrder(name,brand,symptom).subscribe(
      result => this.router.navigate(['/list-Orders']),
      error => console.error('Error adding Order:', error)
    );

  }

}

/*
ng g c addOrder
html file same as in addOrder
ts File, use OrderService
*/
