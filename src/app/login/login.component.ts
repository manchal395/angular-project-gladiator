import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = new Login();

  //Dependency Injection - Over here we are injecting Router Object
  constructor(private router: Router) { }

  ngOnInit(): void {
  }

}

export class Login{
 
  uname:string | undefined | null = null;
  psw:string | undefined | null = null;
  
}