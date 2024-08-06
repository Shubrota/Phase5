import { Injectable } from '@angular/core';
import { Medicine } from '../model/medicine';
import { HttpClient } from '@angular/common/http';

import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MedicineService {

  Medicines: Medicine[] = [];
  httpClient!: HttpClient;

  //restAPIServerBaseUrl: string = "http://localhost:3000";

  // FOR SPRING-BOOT-REST_API_SERVER
  restAPIServerBaseUrl: string = "http://localhost:80";

  constructor(httpClient: HttpClient) {
    this.httpClient = httpClient;
  }

  //List API
  getAllMedicines(): Observable<Medicine[]> {
    //return this.httpClient.get<Medicine[]>(`${this.restAPIServerBaseUrl}/Medicines`);

    // FOR SPRING-BOOT-REST_API_SERVER
    return this.httpClient.get<Medicine[]>(`${this.restAPIServerBaseUrl}/Medicine/list`);
  }

  //Details API
  getMedicine = (id: number): Observable<Medicine> => {
    //For JSON-SERVER
    //return this.httpClient.get<Medicine>(`${this.restAPIServerBaseUrl}/Medicines/${id}`);

    // FOR SPRING-BOOT-REST_API_SERVER
    return this.httpClient.get<Medicine>(`${this.restAPIServerBaseUrl}/Medicine/details/${id}`);
  }

  //Delete API
  deleteMedicine = (id: number): Observable<string> => {
    return this.httpClient.delete<string>(`${this.restAPIServerBaseUrl}/Medicines/${id}`);
  };

 

  
  // Create API
  newIdsStart:number=10002;

  /*
  addMedicine(name: string, price: number, image:string): Observable<any>  {

    this.newIdsStart=this.newIdsStart+1;

    let id: number = this.newIdsStart;   

    //let prod: Medicine = new Medicine(id, name,image, price, true);
    //const prodJSON = JSON.stringify(prod);

    let prodJSON={
      "id":""+id,
      "name":name,
      "price":price,
      "MedicineImage":image,
    };

    const headers = { 'content-type': 'application/json' };
    

    return this.httpClient.post(`${this.restAPIServerBaseUrl}/Medicines`, prodJSON, { 'headers': headers });
  }
  */


  //FOr SPROINT REST 
  addMedicine(name: string, brand: string, symptom:string): Observable<any>  {

    let prodJSON={
      "name":name,
      "brand":brand,
      "symptom":symptom,
    };

    const headers = { 'content-type': 'application/json' };  

    return this.httpClient.post(`${this.restAPIServerBaseUrl}/Medicine/add-Medicine`, prodJSON, { 'headers': headers });
  }

  updateMedicine(id:number,name: string, brand: string, symptom:string): Observable<any>  {
    let prodJSON={
      "id":""+id,
      "name":name,
      "brand":brand,
      "symptom":symptom
    };

    const headers = { 'content-type': 'application/json' };    

    return this.httpClient.put(`${this.restAPIServerBaseUrl}/Medicines/${id}`, prodJSON, { 'headers': headers });
  }

}
