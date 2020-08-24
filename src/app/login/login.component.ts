import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginService } from '../login.service';
import { Login } from '../login';
@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  login: Login = new Login();
  message: string;
  
  //Dependency Injection - Over here we are injecting Router Object
  constructor(private router: Router,private loginService: LoginService) { }

  ngOnInit(): void {
  }
  loginUser() {
    //alert(JSON.stringify(this.login));
    this.loginService.login(this.login).subscribe(data => {
      alert(JSON.stringify(data));
      if((data.status == 'SUCCESS') && (data.userType =='ADMIN')) {
        let adminId = data.userId;
        alert(data.userId);
        let name = data.name;
        let typeOfUser= data.userType;
        //let obj = {id : customerId, name : customerName};
        sessionStorage.setItem('adminId', String(adminId));
        sessionStorage.setItem('typeOfUser', typeOfUser);
        sessionStorage.setItem('name', name);
        this.router.navigate(['admin-dashboard']);
      }
      else {
        this.message = data.message;
      }
    })
  }



}
