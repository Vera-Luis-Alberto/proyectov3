import { Component, Inject } from '@angular/core';
import { AdminInterface } from 'src/app/interfaces/adminInterface';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-modificar-admin',
  templateUrl: './modificar-admin.component.html',
  styleUrls: ['./modificar-admin.component.css']
})
export class ModificarAdminComponent {
  
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarAdminComponent>, @Inject(MAT_DIALOG_DATA) public data: AdminInterface, private dataService: DataService) { 
    this.adminModificar.patchValue({
      cedula: data.cedula,
      nombres: data.nombres,
      apellidos: data.apellidos
    });
  }

  adminModificar = new FormGroup({
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
      state: { datosAdmin: this.data } 
    };

    this.dialogRef.close(); 
    this.redirectTo("gestion-admin", this.dataService.lvl, objToSend);

  }

  redirectTo(uri:string, uriparam:number, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri,uriparam],{ state: { datosAdmin: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
