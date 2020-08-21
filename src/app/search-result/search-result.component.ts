import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchDetails: SearchDetails[];
  flights: Flight[];

  constructor() { }

  ngOnInit(): void {
    this.searchDetails = [
      new SearchDetails("Delhi", "Mumbai", new Date()),
      new SearchDetails("Mumbai", "Delhi", new Date())
    ];
    this.flights = [
      new Flight("AI 887", "06:50" , "09:00", 5097),
      new Flight("AI 1002", "16:15" , "18:25", 6000),
      new Flight("AI 537", "17:00" , "19:15", 4580),
      new Flight("AI 24", "18:00" , "20:15", 6500)
    ];
  }

}

class SearchDetails {
  from: String;
  to: String;
  date: Date;

  constructor(from: String, to: String, date: Date) {
    this.from = from;
    this.to = to;
    this.date = date;
  }
}

class Flight {
  id: String;
  depart: String;
  arrival: String;
  price: number;

  constructor(id: String, depart: String, arrival: String, price: number) {
    this.id = id;
    this.depart = depart;
    this.arrival = arrival;
    this.price = price;
  }

}