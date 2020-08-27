import { Component, OnInit } from '@angular/core';
import { Users } from '../user';
import { UserService } from '../user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  user: Users = new Users();
  constructor(private userService: UserService, private router: Router) { }

  ngOnInit(): void {
  }
  register(){
    //alert(JSON.stringify(this.user));
    this.userService.register(this.user).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        //this.router.navigate(['thankyou'])
        sessionStorage.setItem('msg', "Registration Successful! Login to continue.");
        this.router.navigate(['message']);
      }
      else {
        //missing code right now
      }
    })

  }

}
