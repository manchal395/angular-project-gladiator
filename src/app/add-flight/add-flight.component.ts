import { AddFlightDto } from './../add-flight-dto';
import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'add-flight',
  templateUrl: './add-flight.component.html',
  styleUrls: ['./add-flight.component.css']
})
export class AddFlightComponent implements OnInit {

  addflightdto: AddFlightDto = new AddFlightDto;


  public selected: boolean = true;
  public today = new Date();
  msg: any;
  //to get date in desired format so that depart and arrival datetime could be set to current datetime
  //new Date() saves datetime in format: Mon Aug 24 2020 03:37:18 GMT+0530 (Indian Standard Time)
  //toISOString() returns datetime in  : 2020-08-23T22:07:18:957Z
  //after using substring, datetime is : 2020-08-23T22:07

  public departDate = this.today.toISOString().substring(0, 16);
  public returnDate = this.today.toISOString().substring(0, 16);
  public resetDate = "";
  public dateselected = new Date();

  public City = [{ name: 'Agartala' }, { name: 'Agra'}, { name: 'Ahmedabad'},{ name: 'Aizwal' }, { name: 'Allahabad'}, { name: 'Amritsar'}, { name: 'Aurangabad' }, { name: 'Banglore'}, { name: 'Bhopal'}, { name: 'Bhubaneshwar' }, { name: 'Chandigarh'}, { name: 'Chennai'}, { name: 'Coimbatore' }, { name: 'Darjeeling'}, { name: 'Dehradun'}, { name: 'Delhi' }, { name: 'Dharamsala'}, { name: 'Gandhinagar'}, { name: 'Goa' }, { name: 'Guwhati'}, { name: 'Hyderabad'}, { name: 'Imphal' }, { name: 'Indore'}, { name: 'Jammu'}, { name: 'Kanpur' }, { name: 'Kochi'}, { name: 'Kolkata'}, { name: 'Kozhikode' }, { name: 'Lucknow'}, { name: 'Mumbai'}, { name: 'Nagpur' }, { name: 'Nasik'}, { name: 'Patna'},{ name: 'Pune' }, { name: 'Raipur'}, { name: 'Rajkot'}, { name: 'Ranchi' }, { name: 'Shillong'}, { name: 'Shimla'},{ name: 'Srinagar' }, { name: 'Tiruvanantpuram'}, { name: 'Vishakhapatnam'} ];

  //public City = [ 'Agartala', 'Agra', 'Ahmedabad', 'Aizwal', 'Allahabad', 'Amritsar', 'Aurangabad', 'Banglore', 'Bhopal', 'Bhubaneshwar', 'Chandigarh', 'Chennai', 'Coimbatore', 'Darjeeling', 'Dehradun', 'Delhi', 'Dharamsala', 'Gandhinagar', 'Goa', 'Guwhati', 'Hyderabad', 'Imphal', 'Indore', 'Jammu', 'Kanpur', 'Kochi', 'Kolkata', 'Kozhikode', 'Lucknow', 'Mumbai', 'Nagpur', 'Nasik', 'Patna', 'Pune', 'Raipur', 'Rajkot', 'Ranchi', 'Shillong', 'Shimla', 'Srinagar','Tiruvanantpuram', 'Vishakhapatnam'];


  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
    //alert(this.today + "\n" + this.departDate + "\n" + this.returnDate);
    this.addflightdto.fromCity = null;
    this.addflightdto.toCity = null;
  }

  onCity(e) {
    //alert(e.target.value);
  }

  addFlight() {

    //alert(JSON.stringify(this.addflightdto));
    this.adminservice.addFlight(this.addflightdto).subscribe( data =>{
      alert(JSON.stringify(data))
    })
  }

  onDateSelect(e) {
    //resetting return date options from departdate
    //alert(e.target.value);
    this.returnDate = e.target.value;
    //resetting selected return date to departdate
    this.resetDate = e.target.value;
    //alert(e.target.value);
  }

  // fromCitySelected(e) {
  //   let index: number = this.City.indexOf(e.target.value);
  //   this.City.splice(index, 1);
  // }

}
