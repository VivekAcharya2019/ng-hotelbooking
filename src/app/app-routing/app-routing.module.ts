import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {Routes,RouterModule} from '@angular/router';
import { EmployeeComponent } from '../employee/employee.component';
import { EmployeeListComponent } from '../employee/employee-list/employee-list.component';
import { CreateEmployeeComponent } from '../employee/create-employee/create-employee.component';

const appRoutes: Routes=[
  {path: 'list', component: EmployeeComponent},
  {path: '', redirectTo: '/list', pathMatch: 'full'},
  {path: 'create', component: CreateEmployeeComponent}

] 

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forRoot(appRoutes)
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
