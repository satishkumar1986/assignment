import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { getLocaleDateFormat } from '@angular/common';

@Component({
  selector: 'app-userview',
  templateUrl: './userview.component.html',
  styleUrls: ['./userview.component.scss']
})
export class UserviewComponent implements OnInit {

  constructor(private productService: ProductService) { }
  productList: any;
  colours =["Green","Blue","Gold","Black","Copper","Brown","Bronze","Maroon"];
  brands =["pe","znopy","twin","holysin","foxzy","finery","scarpia","adreno"];
  searchText: string = "";
  listedSearchProduct: any;
  ngOnInit() {
    this.getProductDetail(); 
  }

  getProductDetail(){
    this.productService.getProductList().subscribe((response) => {
      this.productList = response.slice(0,24);
    },
    (error)=>{
      console.log(error);
    }
    );
  }
  searchProduct($event){
    let searchInput = $event;
    this.productService.getautoCompleteData(searchInput).subscribe(
        (res) => {
          this.listedSearchProduct = res;
          if(this.listedSearchProduct.length > 0){
            this.productList = this.listedSearchProduct;
            console.log("ssa",this.productList);
          }
          // console.log(this.listedSearchProduct);
        }, 
        (error) =>{
          console.log(error);
        });
  }
}
