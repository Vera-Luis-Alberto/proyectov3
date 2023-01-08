import { Component, OnInit } from '@angular/core';
import { NuevoChoferComponent } from '../nuevo-chofer/nuevo-chofer.component';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ModificarChoferComponent } from '../modificar-chofer/modificar-chofer.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { ChoferInterface } from 'src/app/interfaces/choferInterface';

@Component({
  selector: 'app-chofer',
  templateUrl: './chofer.component.html',
  styleUrls: ['./chofer.component.css']
})

export class ChoferComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'disponibilidad', 'acciones'];
  
  data = [
    {cedula: '0913832718', nombres: 'Luis Alberto', apellidos: 'Vera García' , disponibilidad: 'Disponible'},
    {cedula: '0913255678', nombres: 'Cesar Francisco', apellidos: 'Carrión Loaiza' , disponibilidad: 'No disponible'},
    {cedula: '0823483248', nombres: 'Jesus Alberto', apellidos: 'Monserrate Reyna' , disponibilidad: 'Disponible'},
    {cedula: '0458302573', nombres: 'Braulio ', apellidos: 'Marcalupo Zamora' , disponibilidad: 'Disponible'},
  ];

  buscar = new FormControl('');
  buscarChoferCed() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoChofer:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, ) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoChofer = this.nav.extras.state;

    if (this.nuevoChofer != null)
    {
      var ChoferModificado = this.nuevoChofer.datosChofer.queryParams;
      let mod = 0;

      this.data.map(function(chofer){
        if(chofer.cedula === ChoferModificado.cedula){
          chofer.nombres = ChoferModificado.nombres;
          chofer.apellidos = ChoferModificado.apellidos;
          chofer.disponibilidad = ChoferModificado.disponibilidad;
          mod=1;
          return;
        }
      });
      console.log(mod);
      if(mod === 1)
      {
        mod = 0;
        return;
      }
      console.log(this.nuevoChofer.datosChofer.queryParams);
      this.data.push(this.nuevoChofer.datosChofer.queryParams);
    }
  };

  // openDialogAgregar() {
  //   const dialogConfig = new MatDialogConfig();
  //   dialogConfig.disableClose = false;
  //   dialogConfig.autoFocus = true;
  //   this.dialog.open(NuevoChoferComponent, dialogConfig);
  // }; 

  openDialogAgregar(){
    this.dialog.open(NuevoChoferComponent, {
      width: '50%',
    })
  }

  openDialogModificar(cedula: string, nombres: string, apellidos: string, disponibilidad: string){
    let choferModificar = {cedula, nombres, apellidos, disponibilidad} as ChoferInterface;
    this.dialog.open(ModificarChoferComponent, {
      width: '50%',
      data: choferModificar
    })
  }

  eliminar(cedula: string) {
    //Busca posicion del chofer
    let indice = this.data.findIndex((chofer) => chofer.cedula == cedula);
    //Elimina el chofer
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<ChoferInterface>(this.data);
    console.log(this.data);
  }
}
