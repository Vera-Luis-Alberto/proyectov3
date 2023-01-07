import { Component, OnInit, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { ChoferComponent } from '../chofer/chofer.component';

@Component({
  selector: 'app-nuevo-chofer',
  templateUrl: './nuevo-chofer.component.html',
  styleUrls: ['./nuevo-chofer.component.css']
})
export class NuevoChoferComponent{
  constructor(private dialog: MatDialog){
  }
  openDialogChofer(): void {
    const dialogRef = this.dialog.open(ChoferComponent, {});
    dialogRef.afterClosed().subscribe(result => console.log(result));
    };
  }

