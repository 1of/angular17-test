import { createReducer, on } from '@ngrx/store';
import { login, logout} from './login.action';

export const initialState:State  = {
  isLoggedIn: false,
  user: null
};
export interface State  {
  isLoggedIn: boolean;
  user: string|null|undefined;
}

export const loginReducer = createReducer(
  initialState,
  on(login, (state, props) => {
    return {
      ...state,
      isLoggedIn: true,
      user: props.email
    }
  }),
  on(logout, (state) => ({...state, isLoggedIn: false, user: null}))
);
