import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { ChoferComponent } from './chofer/chofer.component';
import { AdministradorComponent } from './administrador/administrador.component';
import { NuevoChoferComponent } from './nuevo-chofer/nuevo-chofer.component';
import { ModificarChoferComponent } from './modificar-chofer/modificar-chofer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatButtonModule} from '@angular/material/button';
import { NgModel, ReactiveFormsModule } from '@angular/forms';
import {MatInputModule} from '@angular/material/input'
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { GestionSecretariaComponent } from './gestion-secretaria/gestion-secretaria.component';
import { GestionAdminComponent } from './gestion-admin/gestion-admin.component';
import { NuevoAdminComponent } from './nuevo-admin/nuevo-admin.component';
import { ModificarAdminComponent } from './modificar-admin/modificar-admin.component';
import { NuevoSecretariaComponent } from './nuevo-secretaria/nuevo-secretaria.component';
import { ModificarSecretariaComponent } from './modificar-secretaria/modificar-secretaria.component';
import { RouterModule } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';
import { NuevoPedidoComponent } from './nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from './modificar-pedido/modificar-pedido.component';
import { GestionarPedidoComponent } from './gestionar-pedido/gestionar-pedido.component';
import { NuevoVehiculoComponent } from './nuevo-vehiculo/nuevo-vehiculo.component';
import { ModificarVehiculoComponent } from './modificar-vehiculo/modificar-vehiculo.component';
import { VehiculoComponent } from './vehiculo/vehiculo.component';
import { ChoferService } from '../services/chofer.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { SecretariaService } from '../services/secretaria.service';
import { AdmiService } from '../services/admi.service';
@NgModule({
  declarations: [
    HeaderComponent,
    PageInicialComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    ChoferComponent,
    AdministradorComponent,
    NuevoChoferComponent,
    ModificarChoferComponent,
    GestionSecretariaComponent,
    GestionAdminComponent,
    GestionAdminComponent,
    NuevoAdminComponent,
    ModificarAdminComponent,
    NuevoSecretariaComponent,
    ModificarSecretariaComponent,
    NuevoPedidoComponent,
    ModificarPedidoComponent,
    GestionarPedidoComponent,
    NuevoVehiculoComponent,
    ModificarVehiculoComponent,
    VehiculoComponent,
    

  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule, RouterModule,
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  exports: [
    HeaderComponent,
    PageInicialComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    HttpClientModule,
    HeaderComponent
  ],
  providers: [
    ChoferService,
    SecretariaService,
    AdmiService,
    HttpClient,
    HttpClientModule, 
    NgModel
  ]
})
export class UiModule { }
