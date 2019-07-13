import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RentalService } from '../shared/rental.service';
import { Rental } from '../shared/rental.model';

@Component({
  selector: 'ng-rental-detail',
  templateUrl: './rental-detail.component.html',
  styleUrls: ['./rental-detail.component.css']
})
export class RentalDetailComponent implements OnInit {

  currentRental:Rental;
  constructor(private route:ActivatedRoute, private service:RentalService) { }

  ngOnInit() {
    this.currentRental=new Rental();
    this.route.params.subscribe(
      (params)=>{
        this.getRental(params['rentalId']);
      }
    )
  }

  getRental(rentalId:string){
    this.service.getRantalById(rentalId).subscribe(
      (rental:Rental)=>{
        this.currentRental=rental;
      },
      (error)=>{
      },
      ()=>{}
    )
  }

}
