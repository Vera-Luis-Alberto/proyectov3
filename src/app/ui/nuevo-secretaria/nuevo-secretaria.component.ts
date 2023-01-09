import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-secretaria',
  templateUrl: './nuevo-secretaria.component.html',
  styleUrls: ['./nuevo-secretaria.component.css']
})
export class NuevoSecretariaComponent {

  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoSecretariaComponent>){
  }

  ngOnInit(): void {
  }

  secretariaNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required)
  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.secretariaNuevo.value.cedula,
        nombres: this.secretariaNuevo.value.nombres,
        apellidos: this.secretariaNuevo.value.apellidos
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/secretaria', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosSecretaria: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
