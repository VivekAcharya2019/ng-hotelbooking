import { Component } from '@angular/core';
// import {HeaderComponent} from './common/header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ng-hotelbooking';
  compTitle='App comp from app.component.ts';

  clickHandler(){
    alert("Hi");
  }
}
