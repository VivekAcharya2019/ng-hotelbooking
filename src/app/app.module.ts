import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';

import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';


import {RentalModule} from './rental/rental.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';
import { EmployeeComponent } from './employee/employee.component';
import { EmployeeListComponent } from './employee/employee-list/employee-list.component';

import {EmployeeService} from './common/employee.service';
import { CreateEmployeeComponent } from './employee/create-employee/create-employee.component';
import { AppRoutingModule } from './app-routing/app-routing.module';


// const routes: Routes = [
//   // {path:'',redirectTo:'/rentals',pathMatch:'full'},
//   {path:'temp',component:TempComponent}
// ];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent,
    EmployeeComponent,
    EmployeeListComponent,
    CreateEmployeeComponent
  ],
  imports: [
        BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
    // RentalModule
  ],
  providers: [EmployeeService],
  bootstrap: [AppComponent]
})
export class AppModule { }
