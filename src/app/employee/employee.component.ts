import { Component, OnInit } from '@angular/core';
import {EmployeeService} from '../common/employee.service';
import{Employee} from '../common/models/employee';

@Component({
  selector: 'ng-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {

  employees:  Employee[];
  constructor(private _employeeService: EmployeeService) { }

  ngOnInit() {
    this._employeeService.getEmployees().subscribe((employeesData)=>{this.employees=employeesData});
  }


}
