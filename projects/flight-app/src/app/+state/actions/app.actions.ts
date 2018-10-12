import { Action } from '@ngrx/store';

export enum AppActionTypes {
  INCREASE_BY = '[App] Increase by'
}

export class IncreaseByAction implements Action {
  readonly type = AppActionTypes.INCREASE_BY;
  constructor(readonly amount: number) {}
}

export type AppActions = IncreaseByAction;
