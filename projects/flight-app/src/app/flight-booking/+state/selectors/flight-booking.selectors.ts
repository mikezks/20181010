import { State } from '../reducers/flight-booking.reducer';
import {createFeatureSelector, createSelector} from '@ngrx/store';

// Selector to get Feature State
export let getFlightBookingState = createFeatureSelector<State>('flightBooking');

// Create Memoized Selectors which can use other Selector Functions
// to transform the result in a Projector Funtion.
// Memoized Selectors cache the result until they recalculate because of
// relevant store changes.
export const getFlights = createSelector(
  // Selector
  getFlightBookingState,
  // Projector
  (state: State) => state.flights
);
