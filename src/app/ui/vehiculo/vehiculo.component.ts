import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router} from '@angular/router';
import { MatTableDataSource } from '@angular/material/table';
import { VehiculoInterface } from 'src/app/interfaces/vehiculoInterface';
import { NuevoVehiculoComponent } from '../nuevo-vehiculo/nuevo-vehiculo.component';
import { ModificarVehiculoComponent } from '../modificar-vehiculo/modificar-vehiculo.component';

@Component({
  selector: 'app-vehiculo',
  templateUrl: './vehiculo.component.html',
  styleUrls: ['./vehiculo.component.css']
})
export class VehiculoComponent implements OnInit {

  dataSource: any = [];
  displayedColumns: string[] = ['matricula', 'marca', 'disponibilidad', 'tipo', 'acciones'];
  
  data = [
    {matricula: 'GFC-712', marca: 'Chevrolet', disponibilidad: 'Disponible' , tipo: 'Camioneta'},
    {matricula: 'PDS-122', marca: 'Kia', disponibilidad: 'No disponible' , tipo: 'Sedan'},
    {matricula: 'GTA-734', marca: 'Chevrolet', disponibilidad: 'Disponible' , tipo: 'Camión'},
    {matricula: 'PKC-341', marca: 'Dongfeng', disponibilidad: 'Disponible' , tipo: 'Camioneta'},
    
  ];

  buscar = new FormControl('');
  buscarVehiculo() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoVehiculo:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, ) { 
    
    this.nav = this.router.getCurrentNavigation();
    this.nuevoVehiculo = this.nav.extras.state;

    if (this.nuevoVehiculo != null)
    {
      var VehiculoModificado = this.nuevoVehiculo.datosVehiculo.queryParams;
      let mod = 0;

      this.data.map(function(chofer){
        if(chofer.matricula === VehiculoModificado.matricula){
          chofer.marca = VehiculoModificado.marca;
          chofer.disponibilidad = VehiculoModificado.disponibilidad; 
          chofer.tipo = VehiculoModificado.tipo;         
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
      console.log(this.nuevoVehiculo.datosVehiculo.queryParams);
      this.data.push(this.nuevoVehiculo.datosVehiculo.queryParams);
    }
  };

  openDialogAgregar(){
    this.dialog.open(NuevoVehiculoComponent, {
      width: '50%',
    })
  }

  openDialogModificar(matricula: string, marca: string, disponibilidad: string, tipo: string){
    let vehiculoModificar = {matricula, marca, disponibilidad, tipo} as VehiculoInterface;
    this.dialog.open(ModificarVehiculoComponent, {
      width: '50%',
      data: vehiculoModificar
    })
  }

  eliminar(matricula: string) {
    //Busca posicion del chofer
    let indice = this.data.findIndex((vehiculo) => vehiculo.matricula == matricula);
    //Elimina el chofer
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<VehiculoInterface>(this.data);
    console.log(this.data);
  }

}
