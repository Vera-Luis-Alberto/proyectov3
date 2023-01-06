import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './ui/page-inicial/page-inicial.component';
import { LoginComponent } from './ui/login/login.component';

const routes: Routes = [
  {path:'', component: PageInicialComponent},
  {path: 'login', component: LoginComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
