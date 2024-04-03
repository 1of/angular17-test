import { Component } from '@angular/core';
import {FormControl, Validators} from '@angular/forms';
import { Store } from '@ngrx/store';
import {Observable} from "rxjs";
import { login, logout} from "../store/login.action";
import {getIsLoggedIn, getUser} from "../store/islogin.selector"
import {State} from "../store/login.reducer";
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {
  loggedInUser$: Observable<any>;
  isLoggedIn$: Observable<boolean>;
  toggleType: boolean = false;
  constructor(private store: Store<{ isLoggedIn: boolean }> ) {
    this.loggedInUser$ = store.select(getUser);
    this.isLoggedIn$ = store.select(getIsLoggedIn);
  }
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  passwordFormControl = new FormControl('', [Validators.required, Validators.minLength(6)]);

  login() {
    if (!this.emailFormControl.valid || !this.passwordFormControl.valid) return

    // TODO  add request to authorize user
    this.store.dispatch(login({
      email: this.emailFormControl.value,
      password: this.passwordFormControl.value
    }));
  }
  logout() {
    this.store.dispatch(logout());
  }
}


