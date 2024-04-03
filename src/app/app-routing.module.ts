import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthGuardService} from './services/auth-guard.service';

const routes: Routes = [
  { path: 'login', loadChildren: () => import('./login/login.module').then(m => m.LoginModule) },
  { path: 'page-1', loadChildren: () => import('./page-1/page-1.module').then(m => m.Page1Module),
    canActivate: [AuthGuardService]},
  { path: 'page-2', loadChildren: () => import('./page-2/page-2.module').then(m => m.Page2Module),
    canActivate: [AuthGuardService]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
