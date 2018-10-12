import * as fromApp from '../reducers/app.reducer';
import { createSelector, createFeatureSelector } from '@ngrx/store';
import { State } from '../reducers/app.reducer';

export let getAppState = createFeatureSelector<State>('app');

export const getCount = createSelector(
  getAppState,
  (state: fromApp.State) => state.count
);
