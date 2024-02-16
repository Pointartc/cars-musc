import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {LoginComponent} from "./share/components/login/login.component";
import {MainComponent} from "./main/main.component";
import {RegisterComponent} from "./share/components/register/register.component";

const routes: Routes = [
  {path: '', loadChildren: () => import('./share/components/login/login.module').then(m => m.LoginModule)},
  {path: 'main', loadChildren: () => import('./main/main.module').then(m => m.MainModule)},
  {path: 'login', component: LoginComponent}
  // {path: 'main', component: MainComponent},
  // {path: 'register', component: RegisterComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
