import { createFeatureSelector, createSelector } from '@ngrx/store';
import { initialState, State } from './login.reducer';

export const getIsLoggedInState = createFeatureSelector<State>('isLoggedIn');

export const getIsLoggedIn = createSelector(
  getIsLoggedInState,
  (state: State) => state.isLoggedIn
);

export const getUser = createSelector(
  getIsLoggedInState,
  (state: State) => state.user
);
