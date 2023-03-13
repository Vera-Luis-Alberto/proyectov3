import { Component, OnInit } from '@angular/core';
import { NuevoSecretariaComponent } from '../nuevo-secretaria/nuevo-secretaria.component';
import { ModificarSecretariaComponent } from '../modificar-secretaria/modificar-secretaria.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';
import { SecretariaInterface } from 'src/app/interfaces/secretariaInterface';
import { SecretariaService } from 'src/app/services/secretaria.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-gestion-secretaria',
  templateUrl: './gestion-secretaria.component.html',
  styleUrls: ['./gestion-secretaria.component.css']
})
export class GestionSecretariaComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'acciones'];

  data: any = [];

  buscar = new FormControl('');
  buscarSecretariaCed() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoSecretaria:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, private api:SecretariaService){
    this.nav = this.router.getCurrentNavigation();
    this.nuevoSecretaria = this.nav.extras.state;
    /*if (this.nuevoSecretaria != null)
    {
      var SecretariaModificado = this.nuevoSecretaria.datosSecretaria.queryParams;
      let mod = 0;

      this.data.map(function(secretaria){
        if(secretaria.cedula === SecretariaModificado.cedula){
          secretaria.nombres = SecretariaModificado.nombres;
          secretaria.apellidos = SecretariaModificado.apellidos;
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
      console.log(this.nuevoSecretaria.datosSecretaria.queryParams);
      this.data.push(this.nuevoSecretaria.datosSecretaria.queryParams);
    }*/
  }

    openDialogAgregar(){
    this.dialog.open(NuevoSecretariaComponent, {
      width: '50%',
    })
  }

 openDialogModificar(cedula: string, nombres: string, apellidos: string) {
  let secretariaModificar = { cedula, nombres, apellidos } as SecretariaInterface;
  const dialogRef = this.dialog.open(ModificarSecretariaComponent, {
    width: '50%',
    data: secretariaModificar
  });

  dialogRef.afterClosed().subscribe((data) => {
    this.update();
  });
}


  eliminar(cedula: string) {
    //Busca posicion de la secretaria
    /*let indice = this.data.findIndex((secretaria) => secretaria.cedula == cedula);
    //Eliminar la secretaria
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);*/
    console.log(cedula);
    this.api.deleteSecretaria(cedula).subscribe((data: any)=>{
      console.log(data);
      this.update();
    },);
  }

  update(){

    this.api.getSecretaria().subscribe(secretaria => {
      console.log(secretaria);
      if(secretaria){
        this.dataSource = new MatTableDataSource(secretaria);
      }
    });

  }

  ngOnInit(): void {
    // const token = localStorage.getItem("token_value");
    // const header = {"token": `bearer ${token}`};
    // httpClient.post<example>(url, {header});
    this.update();
  }
}

