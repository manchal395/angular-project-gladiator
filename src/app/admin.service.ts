import { AddFlightDto } from './add-flight-dto';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AdminService {

  constructor(private http: HttpClient) { }

  addFlight(addflightdto: AddFlightDto) {
    const url = "http://localhost:7001/addFlight";
    return this.http.post<AddFlightDto>(url, addflightdto);

  }

  deleteFlight(id: number) {
    const url = "http://localhost:7001/deleteFlight";
    return this.http.post(url, id);
  }
  
}
