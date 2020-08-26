import { Router } from '@angular/router';
import { BookingService } from './../booking.service';
import { AddBookingDto } from './../booking';
import { AddPassengerDto } from './../passenger';
import { FetchedFlightsDto } from './../fetched-flights-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  static selectedFlights: FetchedFlightsDto[] = [];
  booking: AddBookingDto = new AddBookingDto;
  passengers = parseInt(sessionStorage.getItem('noOfPassengers'));
  i: number = 1; 
  index: number;

  passNo(n: number) : any[] {
    return Array(n);
  }

  constructor(private bookservice: BookingService, private router: Router) { }

  ngOnInit(): void {
    alert(this.passengers);

    for(this.index=0; this.index<this.passengers; this.index++) {
      this.booking.passengersDetails[this.index] = new AddPassengerDto;
      this.booking.passengersDetails[this.index].title = null;
      this.booking.passengersDetails[this.index].gender = null;
    }
  }

  trackByMethod(index:any, el:any) {
    return index;
  }

  getFlightsData(sd: FetchedFlightsDto[]) {
    alert(JSON.stringify(sd));
    this.displayFlightsData(sd);
    alert(JSON.stringify(BookingComponent.selectedFlights));
  }

  displayFlightsData(ff: FetchedFlightsDto[]) {
    ff.forEach(function(flight){
      BookingComponent.selectedFlights.push(flight);
    })
  }

  displayFlights() {
    this.booking.userId = parseInt(sessionStorage.getItem('loggedinId'));
    this.booking.amount = parseInt(sessionStorage.getItem('amount'));
    this.booking.departFlightScheduleId = parseInt(sessionStorage.getItem('dept_fs_id'));
    this.booking.returnFlightScheduleId = parseInt(sessionStorage.getItem('ret_fs_id'));
    this.booking.noOfPassengers = parseInt(sessionStorage.getItem('noOfPassengers'));
    this.booking.fclass = sessionStorage.getItem('fclass');
    alert(JSON.stringify(this.booking));
    
    this.bookservice.createBooking(this.booking).subscribe(data => {
      alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        alert(data.message);
        this.router.navigate(['user-dashboard']);
      }
      else {
        alert(data.message);
        this.router.navigate(['search']);
      }
    })
  }
}
