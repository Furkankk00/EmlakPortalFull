import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from 'src/app/services/authentication.service';

@Component({
  selector: 'app-admin-main',
  templateUrl: './admin-main.component.html',
  styleUrls: ['./admin-main.component.css']
})
export class AdminMainComponent implements OnInit {

  userEmail:string = '';
  constructor(private authService:AuthenticationService) { }

  ngOnInit(): void {
    this.userEmail = this.authService.currentUserValue.userEmail;
  }

  
  logout(){
    this.authService.logout();
  }
}
