import { CancelBookingDto } from './booking-id-dto';
import { Observable } from 'rxjs';
import { Status } from './status';
import { HttpClient } from '@angular/common/http';
import { AddBookingDto } from './booking';
import { Injectable } from '@angular/core';
import { ViewBookingDto } from './view-booking-dto';
import { UserId } from './user-details';
@Injectable({
  providedIn: 'root'
})
export class BookingService {

  constructor(private http: HttpClient) { }

  createBooking(bookingdto: AddBookingDto): Observable<Status> {
    const url = 'http://localhost:7001/bookFlight';
    return this.http.post<Status>(url, bookingdto);
  }

  viewBooking(userId: UserId): Observable<ViewBookingDto> {
    const url='http://localhost:7001/viewBooking';
    return this.http.post<ViewBookingDto>(url, userId);
  }

  cancelBooking(bid: CancelBookingDto): Observable<Status> {
    const url = 'http://localhost:7001/cancelBooking';
    return this.http.post<Status>(url, bid);
  }

}
