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

  constructor(private router: Router, public dataService: DataService) {}

  btnIniciarSesion(){
    this.router.navigateByUrl('/login');
  };
    
  CerrarSesion(){
    this.router.navigate(['/']);
    this.dataService.lvl = 0;
  }

  Inicio(){
    this.router.navigate(['/']);
  }

  ngOnInit(): void {
  }
}
