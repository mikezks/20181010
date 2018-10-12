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
import { StoreModule } from '@ngrx/store';
import * as fromFlightBooking from './+state/reducers/flight-booking.reducer';
import { EffectsModule } from '@ngrx/effects';
import { FlightBookingEffects } from './+state/effects/flight-booking.effects';

@NgModule({
    imports: [
      CommonModule,
      SharedModule,
      RouterModule.forChild(FLIGHT_BOOKING_ROUTES),
      ReactiveFormsModule,
      StoreModule.forFeature('flightBooking', fromFlightBooking.reducer),
      EffectsModule.forFeature([FlightBookingEffects])
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
