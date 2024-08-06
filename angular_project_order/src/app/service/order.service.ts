import { Injectable } from '@angular/core';
import { Order } from '../model/order';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class OrderService {

  Orders: Order[] = [];
  httpClient!: HttpClient;

  //restAPIServerBaseUrl: string = "http://localhost:3000";

  // FOR SPRING-BOOT-REST_API_SERVER
  restAPIServerBaseUrl: string = "http://localhost:80";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  //List API
  getAllOrders(): Observable<Order[]> {
    //return this.httpClient.get<Order[]>(`${this.restAPIServerBaseUrl}/Orders`);

    // FOR SPRING-BOOT-REST_API_SERVER
    return this.httpClient.get<Order[]>(`${this.restAPIServerBaseUrl}/Order/list`);
  }

  //Details API
  getOrder = (id: number): Observable<Order> => {
    //For JSON-SERVER
    //return this.httpClient.get<Order>(`${this.restAPIServerBaseUrl}/Orders/${id}`);

    // FOR SPRING-BOOT-REST_API_SERVER
    return this.httpClient.get<Order>(`${this.restAPIServerBaseUrl}/Order/details/${id}`);
  }

  //Delete API
  deleteOrder = (id: number): Observable<string> => {
    return this.httpClient.delete<string>(`${this.restAPIServerBaseUrl}/Orders/${id}`);
  };

 

  
  // Create API
  newIdsStart:number=10002;

  /*
  addOrder(name: string, price: number, image:string): Observable<any>  {

    this.newIdsStart=this.newIdsStart+1;

    let id: number = this.newIdsStart;   

    //let prod: Order = new Order(id, name,image, price, true);
    //const prodJSON = JSON.stringify(prod);

    let prodJSON={
      "id":""+id,
      "name":name,
      "price":price,
      "OrderImage":image,
    };

    const headers = { 'content-type': 'application/json' };
    

    return this.httpClient.post(`${this.restAPIServerBaseUrl}/Orders`, prodJSON, { 'headers': headers });
  }
  */


  //FOr SPROINT REST 
  addOrder(name: string, brand: string, symptom:string): Observable<any>  {

    let prodJSON={
      "name":name,
      "brand":brand,
      "symptom":symptom,
    };

    const headers = { 'content-type': 'application/json' };  

    return this.httpClient.post(`${this.restAPIServerBaseUrl}/Order/add-Order`, prodJSON, { 'headers': headers });
  }

  updateOrder(id:number,name: string, brand: string, symptom:string): Observable<any>  {
    let prodJSON={
      "id":""+id,
      "name":name,
      "brand":brand,
      "symptom":symptom
    };

    const headers = { 'content-type': 'application/json' };    

    return this.httpClient.put(`${this.restAPIServerBaseUrl}/Orders/${id}`, prodJSON, { 'headers': headers });
  }

}
