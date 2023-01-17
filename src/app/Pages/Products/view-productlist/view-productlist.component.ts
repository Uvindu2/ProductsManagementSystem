import { Component, OnInit } from '@angular/core';
import { ProductService } from 'app/services/product.service';
declare interface TableData {
  headerRow: string[];
}
@Component({
  selector: 'app-view-productlist',
  templateUrl: './view-productlist.component.html',
  styleUrls: ['./view-productlist.component.scss']
})
export class ViewProductlistComponent implements OnInit {
  myData: any;
  public tableData1: TableData;

  constructor(private productService:ProductService) { }

  ngOnInit(): void {
    this.tableData1 = {
      headerRow: [ 'Product Image','Product Name', 'Product Category', 'Model', 'Quantity', 'Unit Price','Action'],

  };
    this.getAllProducts()
  }

  getAllProducts(){
    this.productService.getProducts().subscribe((res)=>{
      this.myData=res
      console.log(this.myData);
    })
  }
}
