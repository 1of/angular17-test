import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot } from '@angular/router';
import { Store } from '@ngrx/store';
import {map, Observable} from "rxjs";

@Injectable()
export class AuthGuardService implements CanActivate {

  constructor(private router:Router,
              private store: Store<{ isLoggedIn: boolean }>) {

  }

  canActivate(route: ActivatedRouteSnapshot,
              state: RouterStateSnapshot): Observable<boolean> {

    return this.store.select(appState => appState.isLoggedIn)
      .pipe(map((authUser: any) => {
        // console.log('authUser', authUser.isLoggedIn);
        if (!authUser.isLoggedIn) {
          this.router.navigate(['login'])
          return false
        }
        return authUser.isLoggedIn;
      }))

  }

}
