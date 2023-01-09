import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-admin',
  templateUrl: './nuevo-admin.component.html',
  styleUrls: ['./nuevo-admin.component.css']
})
export class NuevoAdminComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoAdminComponent>){
  }

  ngOnInit(): void {
  }

  adminNuevo = new FormGroup({
    cedula: new FormControl('',Validators.required),
    nombres: new FormControl('',Validators.required),
    apellidos: new FormControl('', Validators.required)
  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        cedula: this.adminNuevo.value.cedula,
        nombres: this.adminNuevo.value.nombres,
        apellidos: this.adminNuevo.value.apellidos
      },
      skipLocationChange: false,
      fragment: 'top' 
    };

    this.dialogRef.close(); 
    this.redirectTo('/admin', objToSend);
  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosAdmin: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }

}
