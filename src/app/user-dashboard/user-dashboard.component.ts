import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { UserId } from '../user-details';
import { ViewBookingDto } from '../view-booking-dto';


@Component({
  selector: 'user-dashboard',
  templateUrl: './user-dashboard.component.html',
  styleUrls: ['./user-dashboard.component.css']
})
export class UserDashboardComponent implements OnInit {
  user1: UserId = new UserId();
  user = sessionStorage.getItem('name');
  usrId:any;
  totalpass:any;
  constructor(private bookingService:BookingService ) { }
  
  viewBookingDto: ViewBookingDto = new ViewBookingDto;
  passenger: ViewBookingDto[] = [];
  res:any;
  ngOnInit(): void {
    this.usrId = sessionStorage.getItem('loggedinId');
    this.user1.userId=this.usrId;
    
  }
  trackByMethod(index:any, el:any) {
    return index;
  }
  
  viewPassenger(){
    this.bookingService.viewBooking(this.user1).subscribe(data => {
      alert(JSON.stringify(Object.keys(data).length)); 
      this.totalpass=Object.keys(data).length;
      this.viewBookingDto=data;
      alert(JSON.stringify(data[0]));  
      alert(JSON.stringify(this.viewBookingDto));
    })
  }
  
  

}


