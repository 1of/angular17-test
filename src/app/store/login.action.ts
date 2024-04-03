import { createAction, props } from '@ngrx/store';

export const login = createAction(
  '[Login Page] Login',
  props<{ email: string|null|undefined; password: string|null|undefined; }>()
);

export const logout = createAction(
  '[Logout Page] Logout'
);

