import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CurrencyComponent} from "./components/currency/currency.component";
import {ErrorComponent} from "./components/error/error.component";
import {AuthGuard} from "./guard/auth.guard";
import {ListaComponent} from "./components/lista/lista.component";

const routes: Routes = [
  { path: 'list', component: ListaComponent, data: {roles: ['ADMIN']}, canActivate: [AuthGuard]},
  { path: '', component: CurrencyComponent, data: {roles: ['USER']}, canActivate: [AuthGuard]},
  { path: 'error', component: ErrorComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
