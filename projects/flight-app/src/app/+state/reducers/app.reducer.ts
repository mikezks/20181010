import { AppActions, AppActionTypes } from '../actions/app.actions';

export interface State {
  count: number;
}

export const initialState: State = {
  count: 50
};

export function reducer(state = initialState, action: AppActions): State {
  switch (action.type) {

    case AppActionTypes.INCREASE_BY:
      return { count: state.count + action.amount };

    default:
      return state;
  }
}
