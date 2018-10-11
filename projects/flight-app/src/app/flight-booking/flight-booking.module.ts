import { CommonModule } from '@angular/common';
import { SharedModule } from '../shared/shared.module';
import { RouterModule } from '@angular/router';
import { FLIGHT_BOOKING_ROUTES } from './flight-booking.routes';
import { FlightSearchComponent } from './flight-search/flight-search.component';
import { FlightCardComponent } from './flight-card/flight-card.component';
import { PassengerComponent } from './passenger/passenger.component';
import { FlightEditComponent } from './flight-edit/flight-edit.component';
import { NgModule } from '@angular/core';
import {ReactiveFormsModule} from '@angular/forms';
import { FlightTypeaheadComponent } from './flight-typeahead/flight-typeahead.component';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
      ReactiveFormsModule
    ],
    declarations: [
      FlightSearchComponent,
      FlightCardComponent,
      PassengerComponent,
      FlightEditComponent,
      FlightTypeaheadComponent
    ],
    providers: []
  })
  export class FlightBookingModule { }
