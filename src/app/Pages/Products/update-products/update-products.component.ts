import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-products',
  templateUrl: './update-products.component.html',
  styleUrls: ['./update-products.component.scss']
})
export class UpdateProductsComponent implements OnInit {
  myForm: any;
  cus_id: any;

  constructor(private fb:FormBuilder,private http:HttpClient,private route:ActivatedRoute) { }

  ngOnInit(): void {

    this.route.params.subscribe((params) => {
      this.cus_id = params['id']
    })


    this.myForm=this.fb.group({
      productName: ['', Validators.required],
      productCategory: ['', Validators.required],
      quantity: ['', Validators.required],
      unitPrice: ['', Validators.required],
      description: ['', Validators.required],
      model: ['', Validators.required],
      imageUrl: ['', Validators.required],

    })

      
  
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
    this.http.put(`http://localhost:8000/product/update/${this.cus_id}`,data).subscribe(()=>{

     alert('Update Successfully')

    })

  }

}
