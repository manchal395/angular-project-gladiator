import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'menubar',
  templateUrl: './menubar.component.html',
  styleUrls: ['./menubar.component.css']
})

export class MenubarComponent implements OnInit {

  name: string;
  constructor() { }

  ngOnInit(): void {
    this.name=sessionStorage.getItem('name');
  }


}
