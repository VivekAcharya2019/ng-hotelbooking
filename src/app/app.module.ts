import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {Routes,RouterModule} from '@angular/router'

import { AppRoutingModule } from './app-routing.module';
import {RentalModule} from './rental/rental.module';

import { AppComponent } from './app.component';
import {HeaderComponent} from './common/header/header.component';
import { RentalComponent } from './rental/rental.component';
import { TempComponent } from './temp/temp.component';

const routes: Routes = [
  {path:'',component:RentalComponent},
  {path:'temp',component:TempComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TempComponent
  ],
  imports: [
    RouterModule.forRoot(routes),
    BrowserModule,
    RentalModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
