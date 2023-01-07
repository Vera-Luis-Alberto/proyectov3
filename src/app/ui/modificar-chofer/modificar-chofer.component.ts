import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChoferComponent } from '../chofer/chofer.component';

@Component({
  selector: 'app-modificar-chofer',
  templateUrl: './modificar-chofer.component.html',
  styleUrls: ['./modificar-chofer.component.css']
})
export class ModificarChoferComponent {
  constructor(private dialog: MatDialog){
  }

  openDialogModChofer(): void {
    const dialogRef = this.dialog.open(ChoferComponent, {});
    dialogRef.afterClosed().subscribe(result => console.log(result));
    };

}
