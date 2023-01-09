import { Component, OnInit } from '@angular/core';
import { NuevoAdminComponent } from '../nuevo-admin/nuevo-admin.component';
import { ModificarAdminComponent } from '../modificar-admin/modificar-admin.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { AdminInterface } from 'src/app/interfaces/adminInterface';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-gestion-admin',
  templateUrl: './gestion-admin.component.html',
  styleUrls: ['./gestion-admin.component.css']
})
export class GestionAdminComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'acciones'];

  data = [
    {cedula: '0432423565', nombres: 'Luis Alberto', apellidos: 'Vera García' },
    {cedula: '0910392480', nombres: 'Cesar Francisco', apellidos: 'Carrión Loaiza' },
    {cedula: '0823453534', nombres: 'Jesus Alberto', apellidos: 'Monserrate Reyna' },
    {cedula: '0465465573', nombres: 'Braulio ', apellidos: 'Marcalupo Zamora'},
  ];

  buscar = new FormControl('');
  buscarAdminCed() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoAdmin:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, ){
    this.nav = this.router.getCurrentNavigation();
    this.nuevoAdmin = this.nav.extras.state;

    if (this.nuevoAdmin != null)
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
    }
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
    let indice = this.data.findIndex((admin) => admin.cedula == cedula);
    //Elimina el admin
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<AdminInterface>(this.data);
    console.log(this.data);
  }
}
