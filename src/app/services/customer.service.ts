import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  private url = 'http://localhost:8000/customer/';
  private url1 = 'http://localhost:8000/customer/save';
  
  constructor(private httpClient: HttpClient) { }
   
  getCustomer(){
    return this.httpClient.get(this.url);
  }
  createCustomer(){
    return this.httpClient.get(this.url1);
  }
   
}