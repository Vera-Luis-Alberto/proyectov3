import { Component, OnInit} from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-nuevo-admin',
  templateUrl: './nuevo-admin.component.html',
  styleUrls: ['./nuevo-admin.component.css']
})
export class NuevoAdminComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoAdminComponent>, private dataService: DataService){
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
