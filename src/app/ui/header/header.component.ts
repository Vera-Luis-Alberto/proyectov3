import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent {

  userName : string = '';

  constructor(private router: Router) {}

  btnIniciarSesion(){
    this.router.navigateByUrl('/login');
  };
    
  CerrarSesion(){
    this.router.navigate(['/']);
    this.userName = '';
  }

  Inicio(){
    this.router.navigate(['/']);
  }
}
