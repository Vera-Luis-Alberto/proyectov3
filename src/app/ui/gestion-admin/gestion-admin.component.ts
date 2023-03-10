import { Component, OnInit } from '@angular/core';
import { NuevoAdminComponent } from '../nuevo-admin/nuevo-admin.component';
import { ModificarAdminComponent } from '../modificar-admin/modificar-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { AdminInterface } from 'src/app/interfaces/adminInterface';
import { AdmiService } from 'src/app/services/admi.service';


@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'acciones'];

  data: any = [];

  buscar = new FormControl('');
  buscarAdminCed() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoAdmin:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, private api:AdmiService){
    this.nav = this.router.getCurrentNavigation();
    this.nuevoAdmin = this.nav.extras.state;

    /* if (this.nuevoAdmin != null)
    {
      var AdminModificado = this.nuevoAdmin.datosAdmin.queryParams;
      let mod = 0;

      this.data.map(function(admin){
        if(admin.cedula === AdminModificado.cedula){
          admin.nombres = AdminModificado.nombres;
          admin.apellidos = AdminModificado.apellidos;
          mod=1;
          return;
        }
      });
      console.log(mod);
      if(mod === 1)
      {
        mod = 0;
        return;
      }
      console.log(this.nuevoAdmin.datosAdmin.queryParams);
      this.data.push(this.nuevoAdmin.datosAdmin.queryParams);
    } */
  }

  openDialogAgregar(){
    this.dialog.open(NuevoAdminComponent, {
      width: '50%',
    })
  }

  openDialogModificar(cedula: string, nombres: string, apellidos: string){
    let adminModificar = {cedula, nombres, apellidos} as AdminInterface;
    this.dialog.open(ModificarAdminComponent, {
      width: '50%',
      data: adminModificar
    })
  }

  eliminar(cedula: string) {
    //Busca posicion del admin
    //let indice = this.data.findIndex((admin) => admin.cedula == cedula);
    //Elimina el admin
    //this.data.splice(indice, 1);
    //Resultado
    //this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.api.getAdmi().subscribe(admi => {
      if(admi){
        this.dataSource = new MatTableDataSource(admi);
        console.log(this.dataSource);
      }
    });
  }
}
