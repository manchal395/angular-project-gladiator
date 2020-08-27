import { SearchFlightDto } from './../search-flight-dto';
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  public searchdto: SearchFlightDto = new SearchFlightDto;

  public City = [{ name: 'Agartala' }, { name: 'Agra'}, { name: 'Ahmedabad'},{ name: 'Aizwal' }, { name: 'Allahabad'}, { name: 'Amritsar'}, { name: 'Aurangabad' }, { name: 'Banglore'}, { name: 'Bhopal'}, { name: 'Bhubaneshwar' }, { name: 'Chandigarh'}, { name: 'Chennai'}, { name: 'Coimbatore' }, { name: 'Darjeeling'}, { name: 'Dehradun'}, { name: 'Delhi' }, { name: 'Dharamsala'}, { name: 'Gandhinagar'}, { name: 'Goa' }, { name: 'Guwhati'}, { name: 'Hyderabad'}, { name: 'Imphal' }, { name: 'Indore'}, { name: 'Jammu'}, { name: 'Kanpur' }, { name: 'Kochi'}, { name: 'Kolkata'}, { name: 'Kozhikode' }, { name: 'Lucknow'}, { name: 'Mumbai'}, { name: 'Nagpur' }, { name: 'Nasik'}, { name: 'Patna'},{ name: 'Pune' }, { name: 'Raipur'}, { name: 'Rajkot'}, { name: 'Ranchi' }, { name: 'Shillong'}, { name: 'Shimla'},{ name: 'Srinagar' }, { name: 'Tiruvanantpuram'}, { name: 'Vishakhapatnam'} ];
  public passengers:number[] = [1,2,3,4,5];
  public selected: boolean = true;
  public today = new Date();
  public departDate = this.today.toLocaleDateString('fr-CA');
  public returnDate = this.today.toLocaleDateString('fr-CA');
  public resetDate = this.today.toLocaleDateString('fr-CA');
  public oneway: boolean = true;
  public dateselected = new Date();
  public radiobtn = "oneway";

  constructor(private router: Router) { }

  ngOnInit(): void {
    sessionStorage.setItem('source', null);
    sessionStorage.setItem('destination', null);
    sessionStorage.setItem('depart', null);
    sessionStorage.setItem('arrive', null);
    sessionStorage.setItem('noOfPassengers', null);
    sessionStorage.setItem('fclass', null);

    this.searchdto.source = null;
    this.searchdto.destination = null;
    this.searchdto.noOfPassengers = null;
    this.searchdto.fclass = null;
  }

  indexTracker(index: number, value: any) {
    return index;
  }

  // radio button enable-disable return date entry
  onChangeTrip(e) {
    //alert(e.target.value);
    if(e.target.value == "oneway") {
      this.oneway = true;
    }
    else if(e.target.value == "return") {
      this.oneway = false;
    }
  }

  onDateSelect(e) {
    //resetting return date options from departdate
    this.returnDate = e.target.value;
    //resetting selected return date to departdate
    this.resetDate = e.target.value;
    //alert(e.target.value);
  }

  onReturnDateSelect(e) {
    //this.resetDate = e.target.value;
  }

  public selectedval = 1;
  onPassengersSelect() {
    //alert(this.selectedval);
  }

  searchFlights() {
    //alert(this.radiobtn);
    //alert(JSON.stringify(this.searchdto));
    sessionStorage.setItem('source', this.searchdto.source);
    sessionStorage.setItem('destination', this.searchdto.destination);
    sessionStorage.setItem('depart', this.searchdto.depart);
    if(this.radiobtn == "oneway")
      sessionStorage.setItem('arrive', '');
    else if(this.radiobtn == "return")
      sessionStorage.setItem('arrive', this.searchdto.arrive);
    sessionStorage.setItem('noOfPassengers', this.searchdto.noOfPassengers.toString());
    sessionStorage.setItem('fclass', this.searchdto.fclass.toLocaleUpperCase());
    this.router.navigate(['search-result']);
  }


}
