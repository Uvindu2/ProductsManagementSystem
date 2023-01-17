import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { CustomerService } from 'app/services/customer.service';

declare interface TableData {
    headerRow: string[];
}

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent implements OnInit {
    public tableData1: TableData;
    myData:any
    nicf=new FormControl()
  selecyNic: '*';
  constructor(private customerService:CustomerService, private http: HttpClient) { }

  ngOnInit() {

      this.tableData1 = {
          headerRow: [ 'First Name', 'Last Name', 'Adress', 'NIC', 'Telephone','Email','Action'],

      };
      this.nicf.valueChanges.subscribe(res => {
        //   // alert(res)
        console.log(res);
          this.selecyNic = res

          alert(this.selecyNic)
          this.loadFilter()

         })
    

      this.getAllCustomerDetails()



  }

  loadFilter(){

  }

  getAllCustomerDetails() {
    this.customerService.getCustomer().subscribe((res) => {

      // console.log(res.existingCustomer);
      this.myData = res;

    })
  }
  deleteCustomer(id: any) {
    this.http.delete(`http://localhost:8000/customer/delete/${id}`).subscribe((res) => {
      alert('Customer Delete Successfully')
      window.location.reload();

    })
  }

}
