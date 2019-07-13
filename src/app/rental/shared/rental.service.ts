import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {Rental} from './rental.model';

@Injectable()
export class RentalService{
private rentals:Rental[]=[
    {
      id:"1",
      title:"My villa",
      city: "Bangalore",
      street:"Ecity",
      category:"Apartement",
      image:"http://via.placeholder.com/350x250",
      bedrooms:2,
      desciption:"Nice apartement",
      dailyRate:30,
      shared:false,
      createdAt:"01/01/2019"
    },
    {
      id:"2",
      title:"My villa",
      city: "Bangalore",
      street:"Ecity",
      category:"Apartement",
      image:"http://via.placeholder.com/350x250",
      bedrooms:2,
      desciption:"Nice apartement",
      dailyRate:30,
      shared:false,
      createdAt:"01/01/2019"
    },
    {
      id:"3",
      title:"My villa",
      city: "Bangalore",
      street:"Ecity",
      category:"Apartement",
      image:"http://via.placeholder.com/350x250",
      bedrooms:2,
      desciption:"Nice apartement",
      dailyRate:30,
      shared:false,
      createdAt:"01/01/2019"
    },
    {
      id:"4",
      title:"My villa",
      city: "Bangalore",
      street:"Ecity",
      category:"Apartement",
      image:"http://via.placeholder.com/350x250",
      bedrooms:2,
      desciption:"Nice apartement",
      dailyRate:30,
      shared:false,
      createdAt:"01/01/2019"
    }
    ];
 
    public GetRentals():Observable<Rental[]>{
      return new Observable((observer)=>{
        setTimeout(() => {
          observer.next(this.rentals);
        }, 1000);
        setTimeout(() => {
          observer.error("Error");
        }, 2000);
        setTimeout(() => {
          observer.complete();
        }, 3000);
      });
    }

    public getRantalById(rentalId:string): Observable<Rental>{
      return new Observable((observer)=>{
        const foundRental = this.rentals.find((rental)=>{
          return rental.id==rentalId
        });

        setTimeout(() => {
          observer.next(foundRental);
        }, 3000);
      })
    }
}