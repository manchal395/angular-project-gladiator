import { BookingComponent } from './../booking/booking.component';

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

  selects: FetchedFlightsDto[] = [];
  totalfare: number = 0;
  selected: boolean = false;
  found: boolean = false;

  pass: any;
  msg = "Fetching Flights...";

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

    if(this.searchdto.fclass == "BUSINESS")
      this.isBusiness = true;
    else if(this.searchdto.fclass == "ECONOMY")
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

    //alert(JSON.stringify(this.searchdto));
    this.searchservice.searchFlights(this.searchdto).subscribe(data => {
      //alert(JSON.stringify(data));
      if((Object.keys(data).length == 0) || (data == null)) {
        this.msg = "Sorry, No Records Found for given Search Details!"
        //this.router.navigate(['search']);
      }
      else
        this.found = true;
      this.fetchedflights = data;

      //alert(JSON.stringify(this.fetchedflights));
      //alert(JSON.stringify(this.selects));
    })

  }

  add(f: FetchedFlightsDto) {
    this.selected = true;
    //alert(JSON.stringify(f));
    this.selects.push(f);
    //alert(JSON.stringify(this.selects));
    if(this.searchdto.fclass == "BUSINESS")
      this.totalfare = (this.totalfare + f.business) * parseInt(sessionStorage.getItem('noOfPassengers'));
    else if(this.searchdto.fclass == "ECONOMY")
      this.totalfare = (this.totalfare + f.economy) * parseInt(sessionStorage.getItem('noOfPassengers'));
  }

  remove(f: FetchedFlightsDto) {
    this.selects.pop();
  }

  // add(f: FetchedFlightsDto) {
  //   alert(JSON.stringify(f));
  //   this.selects.push(f);
  // }

  bookticket() {
    // this.dash.getFlightsData(this.selects);
    sessionStorage.setItem('dept_fs_id', this.selects[0].fsId.toString());
    if(this.selects.length == 2)
      sessionStorage.setItem('ret_fs_id', this.selects[1].fsId.toString());
    else
      sessionStorage.setItem('ret_fs_id', "0");
    sessionStorage.setItem('amount', this.totalfare.toString());
    sessionStorage.setItem('selected-flights', JSON.stringify(this.selects));
    if(sessionStorage.getItem('loggedinId') == "null" || sessionStorage.getItem('loggedinId')==null) {
      alert("You are not logged in. Login to continue booking...")
      sessionStorage.setItem('bookingIn', "true");
      this.router.navigate(['menubar']);
    }
    else {
      sessionStorage.setItem('bookingIn', "false");
      this.router.navigate(['booking']);
    }
  }

}

export class SearchDetails {
  from: String;
  to: String;
  date: Date;

  constructor(from: String, to: String, date: Date) {
    this.from = from;
    this.to = to;
    this.date = date;
  }
}