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

  selectedFlights: FetchedFlightsDto[] = [];
  booking: AddBookingDto = new AddBookingDto;
  passengers = parseInt(sessionStorage.getItem('noOfPassengers'));
  i: number = 1; 
  index: number;
  totalfare: any;
  pass: any;
  addPay: boolean = false;

  passNo(n: number) : any[] {
    return Array(n);
  }

  constructor(private bookservice: BookingService, private router: Router) { }

  ngOnInit(): void {
    //alert(this.passengers);
    this.selectedFlights = JSON.parse(sessionStorage.getItem('selected-flights'));
    //alert(JSON.stringify(this.selectedFlights));
    this.totalfare = sessionStorage.getItem('amount');
    for(this.index=0; this.index<this.passengers; this.index++) {
      this.booking.passengersDetails[this.index] = new AddPassengerDto;
      this.booking.passengersDetails[this.index].title = null;
      this.booking.passengersDetails[this.index].gender = null;
    }
    this.pass = sessionStorage.getItem('noOfPassengers');
  }

  trackByMethod(index:any, el:any) {
    return index;
  }

  addPayment() {
    this.addPay = true;
  }

  hideDiv() {
    this.addPay = false;
  }

  getFlightsData(sd: FetchedFlightsDto[]) {
    // alert(JSON.stringify(sd));
    // this.displayFlightsData(sd);
    // alert(JSON.stringify(BookingComponent.selectedFlights));
  }

  displayFlightsData(ff: FetchedFlightsDto[]) {
    // ff.forEach(function(flight){
    //   BookingComponent.selectedFlights.push(flight);
    // })
  }

  confirmedBooking() {
    this.booking.userId = parseInt(sessionStorage.getItem('loggedinId'));
    this.booking.amount = parseInt(sessionStorage.getItem('amount'));
    this.booking.departFlightScheduleId = parseInt(sessionStorage.getItem('dept_fs_id'));
    this.booking.returnFlightScheduleId = parseInt(sessionStorage.getItem('ret_fs_id'));
    this.booking.noOfPassengers = parseInt(sessionStorage.getItem('noOfPassengers'));
    this.booking.fclass = sessionStorage.getItem('fclass');
    sessionStorage.setItem('passengersDetails', JSON.stringify(this.booking.passengersDetails));
    //alert(JSON.stringify(this.booking));
    sessionStorage.setItem('bookingIn', "false");
    this.bookservice.createBooking(this.booking).subscribe(data => {
      //alert(JSON.stringify(data));
      if(data.status == 'SUCCESS') {
        //alert(data.message);
        sessionStorage.setItem('msg', "Congratulations! Booking Successful. Go to Dashboard to View Your Booking!")
        this.router.navigate(['message']);
      }
      else {
        //alert(data.message);
        sessionStorage.setItem('msg', "Sorry! Your booking has been Unsucessful. Try Again.")
        this.router.navigate(['message']);
      }
    })
  }
}
