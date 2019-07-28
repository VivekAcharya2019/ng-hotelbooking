import { Component, OnInit, Input } from '@angular/core';
import {MapService} from './maps.service';

@Component({
  selector: 'ng-maps',
  templateUrl: './maps.component.html',
  styleUrls: ['./maps.component.css']
})
export class MapsComponent implements OnInit {

  constructor(private mapService:MapService) { }

  ngOnInit() {
  }

  @Input() location:string;

  title: string = 'My first AGM project';
  lat: number;
  lng: number;

  public mapReadyHandler(){
      this.mapService.geoCodeLocation(this.location).subscribe(
        (coordinates)=>{
          this.lat=coordinates.lat;
          this.lng=coordinates.lan;
        },
        (error)=>{
          console.log(error);
        }

      )
  }

}
