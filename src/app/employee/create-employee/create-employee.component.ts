import { Component, OnInit } from '@angular/core';
import {FormGroup, FormControl} from '@angular/forms';

@Component({
  selector: 'ng-create-employee',
  templateUrl: './create-employee.component.html',
  styleUrls: ['./create-employee.component.css']
})
export class CreateEmployeeComponent implements OnInit {
employeeForm:FormGroup;
  constructor() { }

  ngOnInit() {
  this.employeeForm=new FormGroup({
    fullName: new FormControl(),
    email: new FormControl()
  })
  }

  onSubmit(): void {
    alert(this.employeeForm.value);
    console.log(this.employeeForm.value);
  }


}
