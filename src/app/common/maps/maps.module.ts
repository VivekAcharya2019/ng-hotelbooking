import { NgModule, Component } from '@angular/core';
import {MapsComponent} from './maps.component';
import { AgmCoreModule } from '@agm/core';
// import {} from 'googlemaps';

import {MapService} from './maps.service';

@NgModule({
  declarations: [
    MapsComponent
  ],
  exports:[MapsComponent],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyDOxt334nUUdjgxooIC3MQPi8SEErK-9ys'
      })
  ],
  providers: [
    MapService
  ],
})
export class MapModule { }
