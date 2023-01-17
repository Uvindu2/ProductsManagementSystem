import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
   
@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'http://localhost:8000/products/';
  private url1 = 'http://localhost:8000/product/save';
  
  constructor(private httpClient: HttpClient) { }
   
  getProducts(){
    return this.httpClient.get(this.url);
  }
  createProduct(){
    return this.httpClient.get(this.url1);
  }
   
}