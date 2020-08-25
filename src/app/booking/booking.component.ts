import { FetchedFlightsDto } from './../fetched-flights-dto';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  static selectedFlights: FetchedFlightsDto[] = [];

  passengers = parseInt(sessionStorage.getItem('noOfPassengers'));
  passNo(n: number) : any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit(): void {
    alert(this.passengers);
  }

  getFlightsData(sd: FetchedFlightsDto[]) {
    alert(JSON.stringify(sd));
    //this.selectedFlights = Object.assign(sd);
    this.displayFlightsData(sd);
    alert(JSON.stringify(BookingComponent.selectedFlights));
  }

  displayFlightsData(ff: FetchedFlightsDto[]) {
    //BookingComponent.selectedFlights.push(ff[0]);
    ff.forEach(function(flight){
      BookingComponent.selectedFlights.push(flight);
    })
  }

  displayFlights() {
    alert(JSON.stringify(BookingComponent.selectedFlights));
  }
}
