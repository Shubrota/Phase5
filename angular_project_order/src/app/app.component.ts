import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { OrderlistComponent } from './Orderlist/Ordertlist.component';
import { AddOrderComponent } from './addOrder/addOrder.component';
import { OrderlistV1Component } from './Orderlist-v1/Orderlist-v1.component';
import { AddOrderV1Component } from './addOrder-v1/addOrder-v1.component';
import { NosuchpathComponent } from './nosuchpath/nosuchpath.component';
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, OrderlistComponent, AddOrderComponent,
     OrderlistV1Component,
    AddOrderV1Component, NosuchpathComponent],
    providers: [DatePipe],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'angular_project_with_service_routing';
  today:Date = new Date();

  constructor(private datePipe: DatePipe) {}
}
