import { Component , Inject } from '@angular/core';
import { SecretariaInterface } from 'src/app/interfaces/secretariaInterface';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-modificar-secretaria',
  templateUrl: './modificar-secretaria.component.html',
  styleUrls: ['./modificar-secretaria.component.css']
})


export class ModificarSecretariaComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarSecretariaComponent>, @Inject(MAT_DIALOG_DATA) public data: SecretariaInterface) { 
    this.secretariaModificar.patchValue({
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellidos
    });
  }

  secretariaModificar = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    console.log(this.data);
  }

  //navigationExtras: NavigationExtras={};

  onSubmit(cedula:string, nombres:string, apellidos:string)
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula,
        nombres,
        apellidos
      },
      skipLocationChange: false,
      fragment: 'top',
      state: { datosSecretaria: this.data } 
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
