import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  currentUser: string ="";
  cartNumber: number = 0;
  searchText: string = "";
  listedSearchProduct: any;
  @Output() currentSearch = new EventEmitter<string>();
  constructor(private productService: ProductService) { }

  ngOnInit() {
    this.currentUser= JSON.parse(sessionStorage.getItem('loggedUser'));
    this.cartNumber = 0;
  }

   autoComplete(event: any){
    let searchInput = event.target.value;
    if(searchInput.length > 0){
      this.currentSearch.emit(searchInput);
    }
  }

}
