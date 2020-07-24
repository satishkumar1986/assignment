import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthenticateService {

  constructor(private httpClient: HttpClient) { }
  private loginURL: string = "http://xebiascart.herokuapp.com/users?username=";
  public CheckLogin(user): Observable<any>{
    let username = user;
    return this.httpClient.get(this.loginURL+ username)
    .pipe(map(response => {
      if(response){ 
        sessionStorage.setItem("loggedUser", JSON.stringify(response[0].username))
      }
      return response;
    }));
  }
}
