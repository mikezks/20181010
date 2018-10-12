import { Action } from '@ngrx/store';
import { Flight } from '../../../entities/flight';

export enum FlightBookingActionTypes {
  FlightsLoadedAction = '[FlightBooking] Flights loaded',
  FlightUpdateAction = '[FlightBooking] Update Flight',
  FlightsLoadAction = '[FlightBooking] Load Flights'
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

export class FlightsLoadAction {
  readonly type = FlightBookingActionTypes.FlightsLoadAction;
  constructor(
    readonly from: string,
    readonly to: string) {
  }
}

export type FlightBookingActions =
  FlightsLoadedAction |
  FlightUpdateAction |
  FlightsLoadAction;
