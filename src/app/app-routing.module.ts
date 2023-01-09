import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './ui/page-inicial/page-inicial.component';
import { LoginComponent } from './ui/login/login.component';
import { ChoferComponent } from './ui/chofer/chofer.component';
import { GestionSecretariaComponent } from './ui/gestion-secretaria/gestion-secretaria.component';
import { GestionAdminComponent } from './ui/gestion-admin/gestion-admin.component';

const routes: Routes = [
  {path:'', component: PageInicialComponent},
  {path: 'login', component: LoginComponent},
  {path: 'chofer', component: ChoferComponent},
  {path: 'secretaria', component: GestionSecretariaComponent},
  {path: 'admin', component: GestionAdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

}
