import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { PageInicialComponent } from './ui/page-inicial/page-inicial.component';
import { LoginComponent } from './ui/login/login.component';
import { ChoferComponent } from './ui/chofer/chofer.component';
import { GestionSecretariaComponent } from './ui/gestion-secretaria/gestion-secretaria.component';
import { GestionAdminComponent } from './ui/gestion-admin/gestion-admin.component';
import { GestionarPedidoComponent } from './ui/gestionar-pedido/gestionar-pedido.component';
import { VehiculoComponent } from './ui/vehiculo/vehiculo.component';

const routes: Routes = [
  {path:'', component: PageInicialComponent},
  {path:'login', component: LoginComponent},
  {path:'gestion-chofer/:id', component: ChoferComponent},
  {path:'gestion-secretaria/:id', component: GestionSecretariaComponent},
  {path:'gestion-admin/:id', component: GestionAdminComponent},
  {path:'gestion-pedido/:id', component: GestionarPedidoComponent},
  {path:'gestion-vehiculo/:id', component: VehiculoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule {

}
