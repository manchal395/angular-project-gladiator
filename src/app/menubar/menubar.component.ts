import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/authService.component';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent implements OnInit {

  public loginlogout: string = "Login/SignUp";
  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  public changeVal(variable:string){
    this.loginlogout = variable;
  }

  display() {
    //alert("I got clicked");
    if(this.loginlogout == "Logout"){
      this.authService.logout();
      this.loginlogout = "Login/Signup";
    }
  }


  // display(){
  //    if(this.authService.isLoggedIn()){
  //      return 'Logout';
  //    }
  //    else{
  //      this.authService.logout();
  //      return 'Login/Signup';
  //    }
    
    
  // }

}
