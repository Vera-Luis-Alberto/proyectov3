import { Component, OnInit } from '@angular/core';
import { NuevoPedidoComponent } from '../nuevo-pedido/nuevo-pedido.component';
import { ModificarPedidoComponent } from '../modificar-pedido/modificar-pedido.component';
import { PedidoInterface } from 'src/app/interfaces/pedidoInterface';
import { MatDialog } from '@angular/material/dialog';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MatTableDataSource } from '@angular/material/table';
import { ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-gestionar-pedido',
  templateUrl: './gestionar-pedido.component.html',
  styleUrls: ['./gestionar-pedido.component.css']
})
export class GestionarPedidoComponent implements OnInit {
  dataSource: any = [];
  displayedColumns: string[] = ['id', 'cliente', 'costo', 'estado', 'acciones'];

  data = [
    {id: '0432423565', cliente: 'Luis Alberto', costo: '$134', estado: 'Finalizado' },
    {id: '0434234234', cliente: 'Juan Carlos', costo: '$123', estado: 'Por entregar' },
    {id: '0923133213', cliente: 'Braulio Steven', costo: '$341', estado: 'Por entregar' },
    {id: '0921372321', cliente: 'Jesus Juanito', costo: '$234', estado: 'Finalizado' },
  ];

  buscar = new FormControl('');
  buscarPedido() {
    this.dataSource.filter = this.buscar.value?.trim().toLowerCase();
  }

  nuevoPedido:any;
  nav: any;

  constructor(private router: Router, private dialog:MatDialog, ){
    this.nav = this.router.getCurrentNavigation();
    this.nuevoPedido = this.nav.extras.state;

    if (this.nuevoPedido != null)
    {
      var PedidoModificado = this.nuevoPedido.datosPedido.queryParams;
      let mod = 0;

      this.data.map(function(pedido){
        if(pedido.id === PedidoModificado.id){
          pedido.cliente = PedidoModificado.cliente;
          pedido.costo = PedidoModificado.costo;
          pedido.estado = PedidoModificado.estado;

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
      console.log(this.nuevoPedido.datosPedido.queryParams);
      this.data.push(this.nuevoPedido.datosPedido.queryParams);
    }
  }

  openDialogAgregar(){
    this.dialog.open(NuevoPedidoComponent, {
      width: '50%',
    })
  }

  openDialogModificar(id: string, cliente: string, costo: string, estado: string){
    let pedidoModificar = {id, cliente, costo, estado} as PedidoInterface;
    this.dialog.open(ModificarPedidoComponent, {
      width: '50%',
      data: pedidoModificar
    })
  }

  eliminar(id: string) {
    //Busca posicion de la secretaria
    let indice = this.data.findIndex((pedido) => pedido.id == id);
    //Eliminar la secretaria
    this.data.splice(indice, 1);
    //Resultado
    this.dataSource = new MatTableDataSource(this.data);
  }

  ngOnInit(): void {
    this.dataSource = new MatTableDataSource<PedidoInterface>(this.data);
    console.log(this.data);
  }
}
