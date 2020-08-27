import { Component, OnInit } from '@angular/core';
import { BookingService } from '../booking.service';
import { UserId } from '../user-details';
import { ViewBookingDto } from '../view-booking-dto';
import { CancelBookingDto } from '../booking-id-dto';


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
  today = new Date();

  constructor(private bookingService:BookingService ) { }
  
  viewBookingDto: ViewBookingDto = new ViewBookingDto;
  cancelBookDto: CancelBookingDto = new CancelBookingDto;

  passenger: ViewBookingDto[] = [];
  res:any;
  ngOnInit(): void {

    //alert(this.today);
    this.usrId = sessionStorage.getItem('loggedinId');
    this.user1.userId=this.usrId;

    this.today.setHours(this.today.getHours() - 3);
    
  }
  trackByMethod(index:any, el:any) {
    return index;
  }
  
  viewPassenger(){
    this.bookingService.viewBooking(this.user1).subscribe(data => {
      //alert(JSON.stringify(Object.keys(data).length)); 
      this.totalpass=Object.keys(data).length;
      this.viewBookingDto=data;
      //alert(JSON.stringify(data[0]));  
      //alert(JSON.stringify(this.viewBookingDto));
    })
  }

  isCancelPossible(pass) {
    
    if((pass.depart >= this.today.toISOString().substring(0,16)) && !(pass.status=="CANCELLED"))
      return true;
    else
      return false;
  }

  canelTicket(pass){
    this.cancelBookDto.id = pass.id;
    this.bookingService.cancelBooking(this.cancelBookDto).subscribe(data => {
      alert(JSON.stringify(data));
      window.location.reload();
    })
    // alert(pass.depart);
    // alert(this.today);
    // alert(JSON.stringify(this.isCancelPossible(pass)));
  }

}


