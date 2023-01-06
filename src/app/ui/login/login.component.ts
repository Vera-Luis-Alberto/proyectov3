import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent{

  constructor( private dialog: MatDialog){

  }
  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterComponent, dialogConfig);
    };
  }

  
  //  constructor(private dialog: MatDialogRef<RegisterComponent>,
  //   @Inject(MAT_DIALOG_DATA)public message: string ){}

  //  ngOnInit() {

  //  }
  //  onNoClick(): void {
  //   this.dialogRef.close();
  //  }
  

