import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

  ListUser = [{
    user: 'Cesar',
    password: '123',
    lvl:2
  },{
    user: 'Luis',
    password: '123',
    lvl:1
  },{
    user: 'Braulio',
    password: '123',
    lvl:3
  },{
    user: 'Jesus',
    password: '123',
    lvl:1
  }
]

// constructor( private dialog: MatDialog, private router: Router, private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

// }

  constructor( private dialog: MatDialog, private router: Router, private dataService: DataService){}

  usuarioLogin = new FormGroup({
    usuario: new FormControl('',Validators.required),
    password: new FormControl('', Validators.required)
  })

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterComponent, dialogConfig);
  };


  onSubmit(){
    console.log(this.usuarioLogin.value);
    let userLog = this.usuarioLogin.value.usuario;
    let passwordLog = this.usuarioLogin.value.password;
    let lvlRes = 0;
    this.ListUser.forEach(function(user) {
      console.log(user);
      if (user.user === userLog && user.password === passwordLog) {
        lvlRes = user.lvl;
      }
    })
    this.dataService.lvl = lvlRes;
    if(lvlRes === 1){
      this.router.navigate(['/chofer']);
    }
    if(lvlRes === 2){
      this.router.navigate(['/secretaria']);
    }
    if(lvlRes === 3){
      this.router.navigate(['/administrador']);
    }
    if(lvlRes === 0){
      alert("Usuario o contraseña invalido")
    }
    return
  }

  ngOnInit() {
    //console.log(this.dataService.nombreUser$);
    //console.log(history.state.userName)
  }
}

  
  //  constructor(private dialog: MatDialogRef<RegisterComponent>,
  //   @Inject(MAT_DIALOG_DATA)public message: string ){}

  //  ngOnInit() {

  //  }
  //  onNoClick(): void {
  //   this.dialogRef.close();
  //  }
  

