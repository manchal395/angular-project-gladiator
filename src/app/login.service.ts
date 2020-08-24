import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginStatus } from './login-status';
import { Login } from './login';
@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  login(login: Login) : Observable<LoginStatus>  {
    let url = 'http://localhost:7001/login';
    return this.http.post<LoginStatus>(url, login);
  }

}
