import { Component, OnInit } from '@angular/core';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'ng-rental-list',
  templateUrl: './rental-list.component.html',
  styleUrls: ['./rental-list.component.css']
})
export class RentalListComponent implements OnInit {

  rentals:Rental[]=[];
  constructor(private rentalService:RentalService) { }

  ngOnInit() {
    const rentalObservable = this.rentalService.GetRentals();
    rentalObservable.subscribe(
      (rentals:Rental[])=>{
        this.rentals=rentals;
      },
      (error)=>{

      },
      ()=>{}
    );
  }

}
