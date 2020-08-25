import { element } from 'protractor';
import { FetchedFlightsDto } from './../fetched-flights-dto';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {

  static selectedFlights: FetchedFlightsDto[] = [];

  private router: Router;

  constructor() { }

  ngOnInit(): void {
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
