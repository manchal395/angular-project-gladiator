import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  search: Search = new Search();

  public City = [{ name: 'Agartala' }, { name: 'Agra'}, { name: 'Ahmedabad'},{ name: 'Aizwal' }, { name: 'Allahabad'}, { name: 'Amritsar'}, { name: 'Aurangabad' }, { name: 'Banglore'}, { name: 'Bhopal'}, { name: 'Bhubaneshwar' }, { name: 'Chandigarh'}, { name: 'Chennai'}, { name: 'Coimbatore' }, { name: 'Darjeeling'}, { name: 'Dehradun'}, { name: 'Delhi' }, { name: 'Dharamsala'}, { name: 'Gandhinagar'}, { name: 'Goa' }, { name: 'Guwhati'}, { name: 'Hyderabad'}, { name: 'Imphal' }, { name: 'Indore'}, { name: 'Jammu'}, { name: 'Kanpur' }, { name: 'Kochi'}, { name: 'Kolkata'}, { name: 'Kozhikode' }, { name: 'Lucknow'}, { name: 'Mumbai'}, { name: 'Nagpur' }, { name: 'Nasik'}, { name: 'Patna'},{ name: 'Pune' }, { name: 'Raipur'}, { name: 'Rajkot'}, { name: 'Ranchi' }, { name: 'Shillong'}, { name: 'Shimla'},{ name: 'Srinagar' }, { name: 'Tiruvanantpuram'}, { name: 'Vishakhapatnam'} ];

  public selected: boolean = true;
  public today = new Date();
  // public departDate = this.today.getFullYear() + "-" + (((this.today.getMonth()+1)<10?'0':'') + (this.today.getMonth()+1)) + "-" + (this.today.getDate()<10?'0':'' + this.today.getDate());
  // public returnDate = this.today.getFullYear() + "-" + (((this.today.getMonth()+1)<10?'0':'') + (this.today.getMonth()+1)) + "-" + ((this.today.getDate()+1)<10?'0':'' + (this.today.getDate()+1));
  public departDate = this.today.toLocaleDateString('fr-CA');
  public returnDate = this.today.toLocaleDateString('fr-CA');
  public resetDate = "";
  public oneway: boolean = true;
  public dateselected = new Date();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  // isSelected() {
    
  // }

  // radio button enable-disable return date entry
  onChangeTrip(e) {
    if(e.target.value == "Single") {
      this.oneway = true;
    }
    else if(e.target.value == "Return") {
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

  public selectedval = 1;
  onPassengersSelect() {
    //alert(this.selectedval);
  }

  searchFlights() {
    alert("Form Submitted")
    this.router.navigate(['search-result']);
  }

}

class Search{
  fromCity: string;
  toCity: string;
}
