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
import { ReactiveFormsModule } from '@angular/forms';
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
    ModificarSecretariaComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    BrowserAnimationsModule, 
    MatButtonModule, ReactiveFormsModule, MatInputModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  exports: [
    HeaderComponent,
    PageInicialComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent
  ]
})
export class UiModule { }
