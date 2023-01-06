import { Component} from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})


export class RegisterComponent {
  constructor(public dialog: MatDialog) {}
  openDialog(): void{
    const dialogRef = this.dialog.open(RegisterComponent, {});
    dialogRef.afterClosed().subscribe(result => console.log(result));
    };
  } //



