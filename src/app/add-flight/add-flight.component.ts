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

  public City = [{ name: 'Agartala' }, { name: 'Agra'}, { name: 'Ahmedabad'},{ name: 'Aizwal' }, { name: 'Allahabad'}, { name: 'Amritsar'}, { name: 'Aurangabad' }, { name: 'Banglore'}, { name: 'Bhopal'}, { name: 'Bhubaneshwar' }, { name: 'Chandigarh'}, { name: 'Chennai'}, { name: 'Coimbatore' }, { name: 'Darjeeling'}, { name: 'Dehradun'}, { name: 'Delhi' }, { name: 'Dharamsala'}, { name: 'Gandhinagar'}, { name: 'Goa' }, { name: 'Guwhati'}, { name: 'Hyderabad'}, { name: 'Imphal' }, { name: 'Indore'}, { name: 'Jammu'}, { name: 'Kanpur' }, { name: 'Kochi'}, { name: 'Kolkata'}, { name: 'Kozhikode' }, { name: 'Lucknow'}, { name: 'Mumbai'}, { name: 'Nagpur' }, { name: 'Nasik'}, { name: 'Patna'},{ name: 'Pune' }, { name: 'Raipur'}, { name: 'Rajkot'}, { name: 'Ranchi' }, { name: 'Shillong'}, { name: 'Shimla'},{ name: 'Srinagar' }, { name: 'Tiruvanantpuram'}, { name: 'Vishakhapatnam'} ];

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
  }

  addFlight() {

    this.adminservice.addFlight(this.addflightdto).subscribe( data =>{
      alert(JSON.stringify(data))
    })
  }

  public selected: boolean = true;
  public today = new Date();
  public departDate = this.today.toLocaleDateString('fr-CA');
  public returnDate = this.today.toLocaleDateString('fr-CA');
  public resetDate = "";
  public dateselected = new Date();

  onDateSelect(e) {
    //resetting return date options from departdate
    this.returnDate = e.target.value;
    //resetting selected return date to departdate
    this.resetDate = e.target.value;
    //alert(e.target.value);
  }

}
