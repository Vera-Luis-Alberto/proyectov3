import { Component, OnInit } from '@angular/core';
import { NuevoSecretariaComponent } from '../nuevo-secretaria/nuevo-secretaria.component';
import { ModificarSecretariaComponent } from '../modificar-secretaria/modificar-secretaria.component';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { SecretariaInterface } from 'src/app/interfaces/secretariaInterface';
import { ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-gestion-secretaria',
  templateUrl: './gestion-secretaria.component.html',
  styleUrls: ['./gestion-secretaria.component.css']
})
export class GestionSecretariaComponent implements OnInit{

  dataSource: any = [];
  displayedColumns: string[] = ['cedula', 'nombres', 'apellidos', 'acciones'];

  data = [
    {cedula: '0432423565', nombres: 'Luis Alberto', apellidos: 'Vera García' },
    {cedula: '0910392480', nombres: 'Cesar Francisco', apellidos: 'Carrión Loaiza' },
    {cedula: '0823453534', nombres: 'Jesus Alberto', apellidos: 'Monserrate Reyna' },
    {cedula: '0465465573', nombres: 'Braulio ', apellidos: 'Marcalupo Zamora'},
  ];

  buscar = new FormControl('');
  buscarSecretariaCed() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoSecretaria:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, ){
    this.nav = this.router.getCurrentNavigation();
    this.nuevoSecretaria = this.nav.extras.state;

    if (this.nuevoSecretaria != null)
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
    }
  }

  openDialogAgregar(){
    this.dialog.open(NuevoSecretariaComponent, {
      width: '50%',
    })
  }

  openDialogModificar(cedula: string, nombres: string, apellidos: string){
    let secretariaModificar = {cedula, nombres, apellidos} as SecretariaInterface;
    this.dialog.open(ModificarSecretariaComponent, {
      width: '50%',
      data: secretariaModificar
    })
  }

  eliminar(cedula: string) {
    //Busca posicion de la secretaria
    let indice = this.data.findIndex((secretaria) => secretaria.cedula == cedula);
    //Eliminar la secretaria
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<SecretariaInterface>(this.data);
    console.log(this.data);
  }
}

