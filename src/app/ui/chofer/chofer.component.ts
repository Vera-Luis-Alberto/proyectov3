import { Component, OnInit } from '@angular/core';
import { NuevoChoferComponent } from '../nuevo-chofer/nuevo-chofer.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModificarChoferComponent } from '../modificar-chofer/modificar-chofer.component';


export interface PeriodicElement {
  ci: string;
  nombre: string;
  apellido: string;
  disponibilidad: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {ci: '0913832718', nombre: 'Luis Alberto', apellido: 'Vera García' , disponibilidad: 'Disponible'},
  {ci: '0913255678', nombre: 'Cesar Francisco', apellido: 'Carrión Loaiza' , disponibilidad: 'No disponible'},
  {ci: '0823483248', nombre: 'Jesus Alberto', apellido: 'Monserrate Reyna' , disponibilidad: 'Disponible'},
  {ci: '0458302573', nombre: 'Braulio ', apellido: 'Marcalupo Zamora' , disponibilidad: 'Disponible'},
];

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})

export class ChoferComponent implements OnInit {
  

  displayedColumns: string[] = ['ci', 'nombre', 'apellido', 'disponibilidad', 'acciones'];
  dataSource = ELEMENT_DATA;

  constructor(private dialog: MatDialog) {}

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(NuevoChoferComponent, dialogConfig);
    };

    

  ngOnInit(): void {
    
    
  }
}
