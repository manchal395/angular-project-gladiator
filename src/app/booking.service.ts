import { HttpClient } from '@angular/common/http';
import { AddBookingDto } from './booking';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  createBooking(bookingdto: AddBookingDto) {
    const url = 'http://localhost:7001/bookFlight';
    return this.http.post(url, bookingdto);
  }

}
