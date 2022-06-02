import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})
export class MainComponent implements OnInit {

  isLogin:boolean = false;
  email:string ='';
  expiration:Date;
  isAdmin:boolean = false;
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.isLoggedIn();
  }

  isLoggedIn(){
    let user = this.authService.currentUserValue;
    if (user && user.token) {
      this.isLogin = true;
      this.email = user.userEmail;
      this.expiration = user.expiration;
      if (this.authService.currentUserValue.userEmail === environment.manager) {
        this.isAdmin = true;
      }
      else{
        this.isAdmin = false;
      }
    } else {      
      this.isLogin = false;
    }
  }

  logout(){
    this.authService.logout();
  }
}
