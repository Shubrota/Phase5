import { Routes } from '@angular/router';
import { OrderlistV1Component } from './Orderlist-v1/Orderlist-v1.component';
import { AddOrderV1Component } from './addOrder-v1/addOrder-v1.component';
import { OrderV1Component } from './Order-v1/Order-v1.component';
import { NosuchpathComponent } from './nosuchpath/nosuchpath.component';
import { UpdateOrderComponent } from './updateorder/updateorder.component';

export const routes: Routes = [

    { path: 'add-Order', component: AddOrderV1Component },
    { path: 'list-Orders', component: OrderlistV1Component },
    { path: 'Order/:OrderId', component: OrderV1Component },
    { path: 'update-Order/:OrderId', component: UpdateOrderComponent },
    { path: '**', component: NosuchpathComponent },
];
