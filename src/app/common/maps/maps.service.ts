/// <reference path="../../../../node_modules/@types/googlemaps/index.d.ts"/>
import {Injectable} from '@angular/core';
import { Observable } from 'rxjs';
// import {} from "googlemaps";
// declare let google: any;

@Injectable()
export class MapService{
    private geoCoder = new google.maps.Geocoder();

    public geoCodeLocation(location:string): Observable<any>{
        this.geoCoder = (<any>window).google.maps.Geocoder();

        return new Observable((observer)=>{
            this.geoCoder.geocode({address:location},(result,status)=>{
                debugger;
                if(status===google.maps.GeocoderStatus.OK){
                    debugger;
                    const geometry = result[0].geometry.location;
                    observer.next({lat:geometry.lat(),lan:geometry.lng()});
                }
                else{
                    debugger;
                    observer.error('Location could not be geocoded');
                }
            })
        })
    }
}