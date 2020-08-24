import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'; 
import { Users } from './user';
import { Observable } from 'rxjs';
import { Status } from './status';
@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }
  register(user: Users) : Observable<Status> {
    let url = 'http://localhost:7001/register';
    return this.http.post<Status>(url,user);
  }


}
