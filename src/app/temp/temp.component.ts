import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-temp',
  // template:`<h1>Hi</h1>`,
  templateUrl: './temp.component.html',
  styleUrls: ['./temp.component.css']
})
export class TempComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  backgroundColor='yellow';
  foregroundColor='Red';

  colorName = 'red';
  fontWeight = 'bold';
  borderStyle = '1px solid black';

  firstname: string;
  lastName: string;
  fullName: string;
  getFullname():void{
    this.fullName=this.firstname+' '+this.lastName;
  }

} 
