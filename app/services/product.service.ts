import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';
import { map } from 'rxjs/internal/operators/map';

@Injectable(
  // {
  //   providedIn: 
  // }
)
export class ProductService {
  constructor(private httpClient: HttpClient) { }

  private loginURL: string = "https://xebiascart.herokuapp.com/products";
  public getProductList(): Observable<any>{
    return this.httpClient.get(this.loginURL, {responseType: "json" })
    .pipe(map(response => {
      return response;
    }));
  }
  getautoCompleteData(searchInput: any): Observable<any>
  {
    return this.httpClient.get("https://xebiascart.herokuapp.com/products?title=" + searchInput, { responseType: "json" });

  }
}
