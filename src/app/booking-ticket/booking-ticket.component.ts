import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'booking-ticket',
  templateUrl: './booking-ticket.component.html',
  styleUrls: ['./booking-ticket.component.css']
})
export class BookingTicketComponent implements OnInit {

  source: any;
  destination: any;

  constructor() { }

  ngOnInit(): void {
    this.source = sessionStorage.getItem('source');
    this.destination = sessionStorage.getItem('destination');
  }

}
