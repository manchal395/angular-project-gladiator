import { AdminService } from './../admin.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'delete-flight',
  templateUrl: './delete-flight.component.html',
  styleUrls: ['./delete-flight.component.css']
})
export class DeleteFlightComponent implements OnInit {

  id: number;

  constructor(private adminservice: AdminService) { }

  ngOnInit(): void {
  }

  deleteFlight() {

    this.adminservice.deleteFlight(this.id).subscribe( data =>{
      alert(JSON.stringify(data))
    })
  }
}
