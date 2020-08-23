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

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
  }

  addFlight() {

    this.adminservice.addFlight(this.addflightdto).subscribe( data =>{
      alert(JSON.stringify(data))
    })
  }
}
