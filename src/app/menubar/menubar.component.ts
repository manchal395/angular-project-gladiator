import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent implements OnInit {

  name: string;
  public loggedin: boolean;

  constructor() { }

  ngOnInit(): void {
    this.change();
  }

  change() {
    //alert("Heya");
    this.name=sessionStorage.getItem('name');
    if(sessionStorage.getItem('loggedin') == "true")
      this.loggedin = true;
    else
      this.loggedin = false;
  }

}
