import { Injectable } from '@angular/core';
import {FlightService} from '../../flight-search/flight.service';
import {Actions, Effect, ofType} from '@ngrx/effects';
import {FlightBookingActionTypes, FlightsLoadAction, FlightsLoadedAction} from '../actions/flight-booking.actions';
import {map, switchMap} from 'rxjs/operators';

@Injectable()
export class FlightBookingEffects {
  constructor(
    private flightService: FlightService,
    private actions$: Actions) {
  }

  @Effect()
  flightsLoad$ =
    this.actions$
      .pipe(
        ofType(FlightBookingActionTypes.FlightsLoadAction),
        switchMap(
          (a: FlightsLoadAction) => this.flightService.find(a.from, a.to)
        ),
        map(flights => new FlightsLoadedAction(flights))
      );
}
