import { Component, OnInit,Input, Inject, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { DataSource } from '@angular/cdk/collections';
import { NavigationExtras, Router } from '@angular/router';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { PedidoInterface } from 'src/app/interfaces/pedidoInterface';
import { GestionarPedidoComponent } from '../gestionar-pedido/gestionar-pedido.component';

@Component({
  selector: 'app-modificar-pedido',
  templateUrl: './modificar-pedido.component.html',
  styleUrls: ['./modificar-pedido.component.css']
})
export class ModificarPedidoComponent {
  constructor(private router: Router, private dialogRef: MatDialogRef<ModificarPedidoComponent>, @Inject(MAT_DIALOG_DATA) public data: PedidoInterface) { 
    this.pedidoModificar.patchValue({
      id: data.id,
      cliente: data.cliente,
      costo: data.costo,
      estado: data.estado
    });
  }

  pedidoModificar = new FormGroup({
    id: new FormControl('',Validators.required),
    cliente: new FormControl('',Validators.required),
    costo: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  })

  ngOnInit(): void {
    console.log(this.data);
  }

  //navigationExtras: NavigationExtras={};

  onSubmit(id:string, cliente:string, costo:string, estado:string)
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        id,
        cliente,
        costo,
        estado
      },
      skipLocationChange: false,
      fragment: 'top',
      state: { datosPedido: this.data } 
    };

    this.dialogRef.close(); 
    this.redirectTo('/pedido', objToSend);

  }

  redirectTo(uri:string, objToSend:NavigationExtras){
    this.router.navigateByUrl('/', {skipLocationChange: true}).then(()=>
    this.router.navigate([uri],{ state: { datosPedido: objToSend}}));
  }

  cancelar()
  {
    this.dialogRef.close(); 
  }
}
