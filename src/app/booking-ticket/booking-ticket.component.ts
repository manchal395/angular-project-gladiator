import { AddPassengerDto } from './../passenger';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {

  source: any;
  destination: any;
  passengers: AddPassengerDto[] = [];
  noOfPassengers: any;
  index: number;

  passNo(n: number) : any[] {
    return Array(n);
  }

  constructor() { }

  ngOnInit(): void {
    this.noOfPassengers = parseInt(sessionStorage.getItem('noOfPassengers'));
    alert(this.noOfPassengers)
    for(this.index=0; this.index<this.noOfPassengers; this.index++) {
      this.passengers[this.index] = new AddPassengerDto;
    }
    this.source = sessionStorage.getItem('source');
    this.destination = sessionStorage.getItem('destination');
    this.passengers = JSON.parse(sessionStorage.getItem('passengersDetails'))
    alert(JSON.stringify(this.passengers));
  }

}
