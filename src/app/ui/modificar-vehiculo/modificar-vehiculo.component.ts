import { Component , Inject } from '@angular/core';
import { VehiculoInterface } from 'src/app/interfaces/vehiculoInterface';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-vehiculo',
  templateUrl: './modificar-vehiculo.component.html',
  styleUrls: ['./modificar-vehiculo.component.css']
})
export class ModificarVehiculoComponent  {

  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarVehiculoComponent>, @Inject(MAT_DIALOG_DATA) public data: VehiculoInterface) { 
    this.vehiculoModificar.patchValue({
      matricula: data.matricula,
      marca: data.marca,
      disponibilidad: data.disponibilidad,
      tipo: data.tipo,

    });
  }

  vehiculoModificar = new FormGroup({
    matricula: new FormControl('',Validators.required),
    marca: new FormControl('',Validators.required),
    disponibilidad: new FormControl('', Validators.required),
    tipo: new FormControl('', Validators.required),

  })

  ngOnInit(): void {
    console.log(this.data);
  }

  //navigationExtras: NavigationExtras={};

  onSubmit(matricula:string, marca:string, disponibilidad:string, tipo:string)
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        matricula,
        marca,
        disponibilidad,
        tipo
      },
      skipLocationChange: false,
      fragment: 'top',
      state: { datosVehiculo: this.data } 
    };

    this.dialogRef.close(); 
    this.redirectTo('/vehiculo', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosVehiculo: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}

