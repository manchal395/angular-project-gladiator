import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService.component';
import { MenubarComponent } from '../menubar/menubar.component'
import { Router } from '@angular/router';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit {

  loginobj: Login = new Login();

  //Dependency Injection - Over here we are injecting Router Object
  constructor(private router: Router, public authService: AuthService, private menubar: MenubarComponent) { }


  ngOnInit(): void {
    alert("Hello");
  }

  log(){
    if(this.loginobj.uname && this.loginobj.psw){
      const usr = new Login();
      usr.uname = this.loginobj.uname;
      usr.psw=this.loginobj.psw;
      this.authService.login(usr);
      this.menubar.changeVal("Logout");
    }
    return;
  } 

  user(){
    return this.authService.userData.uname;
  }
}

export class Login{

  uname:string | undefined | null = null;
  psw:string | undefined | null = null;
  
}
