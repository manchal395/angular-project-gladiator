import { MenubarComponent } from './../menubar/menubar.component';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent implements OnInit {

  admin = sessionStorage.getItem('name');
  constructor() { }

  //private menu: MenubarComponent = new MenubarComponent;

  ngOnInit(): void {
    //this.menu.change();
  }

}
