import { Component , Inject } from '@angular/core';
import { SecretariaInterface } from 'src/app/interfaces/secretariaInterface';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';
import { SecretariaService } from 'src/app/services/secretaria.service';

@Component({
  selector: 'app-modificar-secretaria',
  templateUrl: './modificar-secretaria.component.html',
  styleUrls: ['./modificar-secretaria.component.css']
})


export class ModificarSecretariaComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarSecretariaComponent>, @Inject(MAT_DIALOG_DATA) public data: SecretariaInterface,private dataService: DataService, private api:SecretariaService) { 
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
    // let objToSend: NavigationExtras = {
    //   queryParams: {
    //     cedula,
    //     nombres,
    //     apellidos
    //   },
    //   skipLocationChange: false,
    //   fragment: 'top',
    //   state: { datosSecretaria: this.data } 
    // };

    // this.dialogRef.close(); 
    // this.redirectTo("gestion-secretaria", this.dataService.lvl, objToSend);
    console.log(nombres)
    this.api.updateSecretaria(cedula,nombres).subscribe((data: any)=>{
      console.log(data);
      this.dialogRef.close();
    },);

  }

  

  redirectTo(uri:string, uriparam:number, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri,uriparam],{ state: { datosSecretaria: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
