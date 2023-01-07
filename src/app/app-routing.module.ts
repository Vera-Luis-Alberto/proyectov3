import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './ui/page-inicial/page-inicial.component';
import { LoginComponent } from './ui/login/login.component';
import { ChoferComponent } from './ui/chofer/chofer.component';

const routes: Routes = [
  {path:'', component: PageInicialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chofer', component: ChoferComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
