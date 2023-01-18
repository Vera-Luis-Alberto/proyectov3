import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo-vehiculo',
  templateUrl: './nuevo-vehiculo.component.html',
  styleUrls: ['./nuevo-vehiculo.component.css']
})
export class NuevoVehiculoComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoVehiculoComponent>, private dataService: DataService){
  }

  ngOnInit(): void {
  }

  vehiculoNuevo = new FormGroup({
    matricula: new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    disponibilidad: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required)

  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        matricula: this.vehiculoNuevo.value.matricula,
        marca: this.vehiculoNuevo.value.marca,
        disponibilidad: this.vehiculoNuevo.value.disponibilidad,
        tipo: this.vehiculoNuevo.value.tipo
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo("gestion-vehiculo", this.dataService.lvl, objToSend);
  }

  redirectTo(uri:string, uriparam:number, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri,uriparam],{ state: { datosVehiculo: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
