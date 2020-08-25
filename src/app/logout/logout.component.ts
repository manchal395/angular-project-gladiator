import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-logout',
  templateUrl: './logout.component.html',
  styleUrls: ['./logout.component.css']
})
export class LogoutComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('adminId', null);
    sessionStorage.setItem('typeOfUser', null);
    sessionStorage.setItem('name', null);
    sessionStorage.setItem('loggedin', "false");
    this.router.navigate(['login']);

  
  }
 

}
