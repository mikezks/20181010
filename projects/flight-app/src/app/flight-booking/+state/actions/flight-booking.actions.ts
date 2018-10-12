import { Action } from '@ngrx/store';
import { Flight } from '../../../entities/flight';

export enum FlightBookingActionTypes {
  FlightsLoadedAction = '[FlightBooking] Flights loaded',
  FlightUpdateAction = '[FlightBooking] Update Flight'
}

export class FlightsLoadedAction implements Action {
  readonly type = FlightBookingActionTypes.FlightsLoadedAction;
  constructor(readonly flights: Flight[]) {}
}

export class FlightUpdateAction {
  readonly type = FlightBookingActionTypes.FlightUpdateAction;
  constructor(readonly flight: Flight) {
  }
}

export type FlightBookingActions =
  FlightsLoadedAction |
  FlightUpdateAction;
