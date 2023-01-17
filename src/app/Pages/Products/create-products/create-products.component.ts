
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { ProductService } from 'app/services/product.service';

@Component({
  selector: 'app-create-products',
  templateUrl: './create-products.component.html',
  styleUrls: ['./create-products.component.scss']
})
export class CreateProductsComponent implements OnInit {
  myForm:any
  constructor(private productService:ProductService,private http:HttpClient, private fb: FormBuilder,private router:Router,private route:ActivatedRoute) { }

  ngOnInit(): void {

     this.myForm = this.fb.group({
        productName: ['', Validators.required],
        productCategory: ['', Validators.required],
        quantity: ['', Validators.required],
        unitPrice: ['', Validators.required],
        description: ['', Validators.required],
        model: ['', Validators.required],
        imageUrl: ['', Validators.required],
  
        
      });

  }
  onSubmit(){
    const data={
      productName:this.myForm.value.productName,
      prodctCategory:this.myForm.value.productCategory,
      Quantity:this.myForm.value.quantity,
      unitPrice:this.myForm.value.unitPrice,
      description:this.myForm.value.description,
      model:this.myForm.value.model,
      imageUrl:this.myForm.value.imageUrl,
    }
console.log(data);
    this.http.post('http://localhost:8000/product/save',data).subscribe((res)=>{
      console.log(res);
      alert("Product Create Successfully")
    })

  }
}
