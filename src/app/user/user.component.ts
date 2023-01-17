import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { Customer } from 'app/Models/customer.model';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  myForm: any;
  customer = new Customer();
  constructor(private fb: FormBuilder,private http:HttpClient,private router:Router,private route:ActivatedRoute) { }

  ngOnInit() {
    this.myForm = this.fb.group({
			firstName: ['', Validators.required],
			lastName: ['', Validators.required],
      address: ['', Validators.required],
      postalCode: ['', Validators.required],
      telephone: ['', Validators.required],
      nic: ['', Validators.required],
      email:['',Validators.required]
      
		});
    
  }
  private updateForm(customer: Customer): void {
    this.myForm.patchValue({
      firstName:customer.firstName,
      lastName:customer.lastName,
      address:customer.address,
      postalCode:customer.postalCode,
      telephone:customer.telephone,
      nic:customer.nic,
      email:customer.email,
  

    });
  }

  private updateUser(customer: Customer): void {
    customer.firstName= this.myForm.value.firstName;
    customer.lastName= this.myForm.get(['lastName']).value;
    customer.address= this.myForm.get(['address']).value;
    customer.postalCode= this.myForm.get(['postalCode']).value;
    customer.telephone= this.myForm.get(['telephone']).value;
    customer.nic= this.myForm.get(['nic']).value;
    customer.email= this.myForm.get(['email']).value;

  }


onSubmit(){


  this.updateUser(this.customer);
  console.log(this.customer);
//   let data={
//     "firstName":this.myForm.value.firstName,
//     "lastName":this.myForm.value.lastName,
//     "address":this.myForm.value.address,
//     "postalCode":this.myForm.value.postalCode,
//     "telephone":this.myForm.value.telephone,
//     "nic":this.myForm.value.nic,
//     "email":this.myForm.value.email,

//   }
//   console.log(data);

this.http.post('http://localhost:8000/customer/save',this.customer)
.subscribe((res:any)=>{
console.log(res);
alert("Data Save Successfully");

 });

}
}
