import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef } from '@angular/material/dialog';
import { NavigationExtras, Router } from '@angular/router';

@Component({
  selector: 'app-nuevo-pedido',
  templateUrl: './nuevo-pedido.component.html',
  styleUrls: ['./nuevo-pedido.component.css']
})
export class NuevoPedidoComponent implements OnInit {

  constructor(private router: Router, private dialogRef: MatDialogRef<NuevoPedidoComponent>){
  }

  ngOnInit(): void {
  }

  pedidoNuevo = new FormGroup({
    id: new FormControl('',Validators.required),
    cliente: new FormControl('',Validators.required),
    costo: new FormControl('', Validators.required),
    estado: new FormControl('', Validators.required)
  })

  onSubmit()
  {
    let objToSend: NavigationExtras = {
      queryParams: {
        id: this.pedidoNuevo.value.id,
        cliente: this.pedidoNuevo.value.cliente,
        costo: this.pedidoNuevo.value.costo,
        estado: this.pedidoNuevo.value.estado
      },
      skipLocationChange: false,
      fragment: 'top' 
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

