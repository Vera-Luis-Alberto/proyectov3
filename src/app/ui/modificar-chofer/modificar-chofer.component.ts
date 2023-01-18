import { Component, OnInit,Input, Inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoferComponent } from '../chofer/chofer.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { ChoferInterface } from 'src/app/interfaces/choferInterface';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modificar-chofer',
  templateUrl: './modificar-chofer.component.html',
  styleUrls: ['./modificar-chofer.component.css']
})
export class ModificarChoferComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarChoferComponent>, @Inject(MAT_DIALOG_DATA) public data: ChoferInterface, private dataService: DataService) { 
    this.choferModificar.patchValue({
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellidos,
      disponibilidad: data.disponibilidad
    });
  }

  choferModificar = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required),
    disponibilidad: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    console.log(this.data);
  }

  //navigationExtras: NavigationExtras={};

  onSubmit(cedula:string, nombres:string, apellidos:string, disponibilidad:string)
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula,
        nombres,
        apellidos,
        disponibilidad
      },
      skipLocationChange: false,
      fragment: 'top',
      state: { datosChofer: this.data } 
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
