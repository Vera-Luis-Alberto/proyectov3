import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { MaterialModule } from '../material/material.module';
import { PageInicialComponent } from './page-inicial/page-inicial.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { SecretariaComponent } from './secretaria/secretaria.component';
import { ChoferComponent } from './chofer/chofer.component';
import { AdministradorComponent } from './administrador/administrador.component';


@NgModule({
  declarations: [
    HeaderComponent,
    PageInicialComponent,
    FooterComponent,
    LoginComponent,
    RegisterComponent,
    SecretariaComponent,
    ChoferComponent,
    AdministradorComponent
  ],
  imports: [
    CommonModule,
    MaterialModule
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
