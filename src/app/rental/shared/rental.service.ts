import { Injectable } from '@angular/core';
import {Observable, observable} from 'rxjs';
import {Rental} from './rental.model';
import {HttpClient} from '@angular/common/http';

@Injectable()
export class RentalService{
 
  constructor(private http:HttpClient){

  }
    public GetRentals():Observable<any>{
      return this.http.get('/api/v1/rentals');
    }

    public getRantalById(rentalId:string): Observable<any>{
      return this.http.get('/api/v1/rentals/'+rentalId);
      // return new Observable((observer)=>{
      //   const foundRental = this.http.get('/api/v1/rentals/'+rentalId);

      //   if(foundRental){
      //     observer.next(foundRental);
      //   }
      //   else{
      //     observer.error("error");
      //   }
        
      // });

      // return new Observable((observer)=>{
      //   const foundRental = this.rentals.find((rental)=>{
      //     return rental.id==rentalId
      //   });

      //   setTimeout(() => {
      //     observer.next(foundRental);
      //   }, 3000);
      // }
    // {
    //  return this.http.get('/api/v1/rentals/'+rentalId);
    // }
    }
}