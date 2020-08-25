import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent implements OnInit {

  name: string;
  static loggedin: boolean;

  constructor(private router: Router) { 
  }

  ngOnInit(): void {

    if(sessionStorage.getItem('loggedin') == "true") {
      MenubarComponent.loggedin = true;
    }
    else {
      MenubarComponent.loggedin= false;
    }

    if(sessionStorage.getItem('clicked')=="true" && MenubarComponent.loggedin == true  && sessionStorage.getItem('typeOfUser')=="ADMIN") {
      this.router.navigate(['admin-dashboard']);
    }
    else if(sessionStorage.getItem('clicked')=="true" && MenubarComponent.loggedin == true  && sessionStorage.getItem('typeOfUser')=="USER") {
      this.router.navigate(['user-dashboard']);
    }
    else if(sessionStorage.getItem('clicked')=="true" && MenubarComponent.loggedin == false){
      this.router.navigate(['login'])
    }
  }

  change() {
    alert("Heya");
  }

  loggedIn() {
    return MenubarComponent.loggedin;
  }

}
