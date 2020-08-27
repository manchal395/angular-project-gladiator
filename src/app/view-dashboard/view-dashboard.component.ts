import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MenubarComponent } from '../menubar/menubar.component';

@Component({
  selector: 'view-dashboard',
  templateUrl: './view-dashboard.component.html',
  styleUrls: ['./view-dashboard.component.css']
})
export class ViewDashboardComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    if(MenubarComponent.loggedin == true  && sessionStorage.getItem('typeOfUser')=="USER") {
      this.router.navigate(['user-dashboard']);
    }
    else if(MenubarComponent.loggedin == true  && sessionStorage.getItem('typeOfUser')=="ADMIN") {
      this.router.navigate(['admin-dashboard']);
    }
    else {
      alert("Log in first!")
      this.router.navigate(['login']);
    }
  }

}
