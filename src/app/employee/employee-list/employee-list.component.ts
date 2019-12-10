import { Component, OnInit, Input } from '@angular/core';
import { Employee } from 'src/app/common/models/employee';

@Component({
  selector: 'ng-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['./employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  @Input() emp : Employee;
  
joiningDate:Date=new Date();

}
