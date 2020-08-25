import { Router } from '@angular/router';
import { FetchedFlightsDto } from './../fetched-flights-dto';
import { SearchFlightsService } from './../search-flights.service';
import { Component, OnInit } from '@angular/core';
import { SearchFlightDto } from '../search-flight-dto';

@Component({
  selector: 'search-result',
  templateUrl: './search-result.component.html',
  styleUrls: ['./search-result.component.css']
})
export class SearchResultComponent implements OnInit {

  searchDetails: SearchDetails[];
  // flights: Flight[];
  //search: SearchComponent;

  fetchedflights: FetchedFlightsDto = new FetchedFlightsDto;
  departFlights: FetchedFlightsDto = new FetchedFlightsDto;
  returnFlights: FetchedFlightsDto = new FetchedFlightsDto;

  searchdto: SearchFlightDto = new SearchFlightDto;
  isEconomy: boolean = false;
  isBusiness: boolean = false;


  constructor(private searchservice: SearchFlightsService, private router: Router) { }

  ngOnInit(): void {
    //alert(JSON.stringify(this.search.getFlights()));
    if(sessionStorage.getItem('source') == "null") {
      this.router.navigate(['/']);
    }

    this.searchdto.source = sessionStorage.getItem('source');
    this.searchdto.destination = sessionStorage.getItem('destination');
    this.searchdto.depart = sessionStorage.getItem('depart');
    this.searchdto.arrive = sessionStorage.getItem('arrive');
    this.searchdto.noOfPassengers = Number(sessionStorage.getItem('noOfPassengers'));
    this.searchdto.fclass = sessionStorage.getItem('fclass');

    if(this.searchdto.fclass == "Business")
      this.isBusiness = true;
    else if(this.searchdto.fclass == "Economy")
      this.isEconomy = true;

    if(this.searchdto.arrive == '') {
      this.searchDetails = [new SearchDetails(this.searchdto.source, this.searchdto.destination, this.searchdto.depart)];
    }
    else {
      this.searchDetails = [
        new SearchDetails(this.searchdto.source, this.searchdto.destination, this.searchdto.depart),
        new SearchDetails(this.searchdto.destination, this.searchdto.source, this.searchdto.arrive)
      ];
    }

    alert(JSON.stringify(this.searchdto));

    this.searchservice.searchFlights(this.searchdto).subscribe(data => {
      //alert(JSON.stringify(data));
      this.fetchedflights = data;
      alert(JSON.stringify(this.fetchedflights));
    })


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