import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo-chofer',
  templateUrl: './nuevo-chofer.component.html',
  styleUrls: ['./nuevo-chofer.component.css']
})
export class NuevoChoferComponent implements OnInit{
  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoChoferComponent>, private dataService: DataService){
  }

  ngOnInit(): void {
  }

  choferNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    disponibilidad: new FormControl('', Validators.required)
  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.choferNuevo.value.cedula,
        nombres: this.choferNuevo.value.nombres,
        apellidos: this.choferNuevo.value.apellidos,
        disponibilidad: this.choferNuevo.value.disponibilidad
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo("gestion-chofer", this.dataService.lvl, objToSend);

  }

  redirectTo(uri:string, uriparam:number, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri,uriparam],{ state: { datosChofer: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}

