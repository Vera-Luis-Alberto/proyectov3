import { Component, OnInit, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { LoginComponent } from '../login/login.component';
import { Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit{

  // lvlName : string = '';

  constructor(private router: Router, public dataService: DataService) {

  // if (dataService.lvl === 1) {this.lvlName = 'Chofer'};
  // if (dataService.lvl === 2) {this.lvlName = 'Secretaria'};
  // if (dataService.lvl === 3) {this.lvlName = 'Administrador'};
  // console.log('HEREEEEEEEEEEEEEE');
  // console.log(this.lvlName);
  }

  btnIniciarSesion(){
    this.router.navigateByUrl('/login');
  };
    
  CerrarSesion(){
    this.router.navigate(['/']);
    this.dataService.lvl = 0;
    this.dataService.lvlName = '';
  }

  Inicio(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
}
