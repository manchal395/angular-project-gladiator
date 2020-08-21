import { Login } from './../login/login.component';
import { Injectable } from "@angular/core";

import { Router } from '@angular/router';

export const AUTH_TOKEN_KEY = 'auth-token';
export const AUTH_USER_DATA = 'user-data'; 

@Injectable({
    providedIn: 'root'
})
export class AuthService{

    public authToken: string | null = null; 
    public userData: Login | null = null;


    constructor(private router: Router){
        this.checkStorage();
    }

  
    checkStorage() {
        const authToken = sessionStorage.getItem(AUTH_TOKEN_KEY);
        const userData = sessionStorage.getItem(AUTH_USER_DATA);
        this.authToken = authToken;
        if(userData){
            this.userData = JSON.parse(userData) as any;
        }
        else{
            this.userData = null;
        }
    }

    login(authData: Login){
        alert(JSON.stringify(authData))
        sessionStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(authData));
        sessionStorage.setItem(AUTH_USER_DATA, JSON.stringify(authData));
        this.checkStorage();
    }  

    public isLoggedIn(){
        return this.authToken !== null;
    }

    public logout() {
        //alert("Called!");
        if(!this.isLoggedIn()) 
            return;
        sessionStorage.clear();
        //this.checkStorage();
        //this.router.navigate(['login']);
        
    }
}