import { Component, OnInit } from '@angular/core';
import { LoginModel } from 'src/app/models/login.model';
import { from } from 'rxjs';
import { AuthenticateService } from 'src/app/services/authenticate.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
loginModel: LoginModel = new LoginModel();
loginError: boolean = true;
loginIssue: string= "";
  constructor(private authenticateService: AuthenticateService, private router : Router) { }

  ngOnInit() {
  }
  login(){ 
    if(this.loginModel.User==undefined || this.loginModel.Password == undefined || this.loginModel.Password!= "delta"){
      alert("Please fill the correct login detail then click Submit");
      return false;
    }
    else{
      this.authenticateService.CheckLogin(this.loginModel.User).subscribe(
        (response)=>{
          this.router.navigate(["/user", "userView"]);
        },
        (error)=>{
          this.loginError = true;
          this.loginIssue = error;
          console.log("Loggine error:", error);
        }
      );
    }
  }
}
