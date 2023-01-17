import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { MaterialModule } from './material/material.module';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UiModule } from './ui/ui.module';
import { RegisterComponent } from './ui/register/register.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input'
import {MatButtonModule} from '@angular/material/button';
import { ReactiveFormsModule } from '@angular/forms';
import {MatCardModule} from '@angular/material/card'
import {MatToolbarModule} from '@angular/material/toolbar'
import {MatIconModule} from '@angular/material/icon';
import {MatDialogModule} from '@angular/material/dialog';
import {MatTableModule} from '@angular/material/table';
import { ChoferComponent } from './ui/chofer/chofer.component';
import { RouterModule } from '@angular/router';
import { MatDialogRef } from '@angular/material/dialog';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    UiModule,
    MatFormFieldModule,
    MatInputModule,
    BrowserModule, RouterModule,
    MatButtonModule, ReactiveFormsModule, 
    MatCardModule, MatToolbarModule, MatIconModule, MatDialogModule, MatTableModule
  ],
  entryComponents: [RegisterComponent],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
