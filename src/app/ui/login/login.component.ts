import { Component, OnInit, Inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatDialogConfig } from '@angular/material/dialog';
import { MatDialogRef,MAT_DIALOG_DATA } from '@angular/material/dialog';
import { RegisterComponent } from '../register/register.component';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import {Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import { AuthService } from 'src/app/auth.service';
import { AdminInterface } from 'src/app/interfaces/adminInterface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})

export class LoginComponent implements OnInit{

// constructor( private dialog: MatDialog, private router: Router, private dialogRef: MatDialogRef<LoginComponent>, @Inject(MAT_DIALOG_DATA) public data: any){

// }

  constructor( private dialog: MatDialog, private router: Router, private dataService: DataService, private service: AuthService){}

  usuarioLogin = new FormGroup({
    cedula: new FormControl('',Validators.required),
    contraseña: new FormControl('', Validators.required)
  })

  openDialog() {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.autoFocus = true;
    this.dialog.open(RegisterComponent, dialogConfig);
  };

  

  response : any;
  usuarioTemp:any;
  onSubmit(){
    this.usuarioTemp = this.usuarioLogin;
    let alert_ = 1;
    this.service.login(this.usuarioLogin.value as AdminInterface).subscribe((data:any) =>{
      alert_ = 0;
      console.log(data)
      if(data.length===0){alert("Usuario o contraseña invalido")};
      this.usuarioTemp= { nombre: data[0].empleado.nombre, token: data[0].token };
      console.log(this.usuarioTemp);

      let lvlRes = data[0].empleado.cargo;
      let direct = '';

      //console.log(lvlRes);
      if(lvlRes == 'Admin')
      {
        lvlRes = 3
        direct = 'gestion-secretaria'
      }
      if(lvlRes == 'Secretaria')
      {
        lvlRes = 2
        direct = 'gestion-chofer'
      }
      if(lvlRes == 'Chofer')
      {
        lvlRes = 1
        direct = 'gestion-pedido'
      }
      if(isNaN(lvlRes))
      {
        lvlRes=0
        alert("Error")
      }
      this.dataService.lvl = lvlRes;


      localStorage.setItem('currentUser',JSON.stringify(this.usuarioTemp));
      this.dataService.lvlName = JSON.parse(localStorage.getItem('currentUser') as string)?.nombre;
      this.router.navigate([direct,lvlRes]);
    }, (errorData)=> alert(errorData.error))
    
    

    // console.log(this.usuarioLogin.value);
    // let userLog = this.usuarioLogin.value.usuario;
    // let passwordLog = this.usuarioLogin.value.password;
    // let lvlRes = 0;
    // this.ListUser.forEach(function(user) {
    //   console.log(user);
    //   if (user.user === userLog && user.password === passwordLog) {
    //     lvlRes = user.lvl;
    //   }
    // })
    // this.dataService.lvl = lvlRes;
    // if(lvlRes === 1){
    //   this.dataService.lvlName = 'Chofer'
    //   this.router.navigate(["gestion-pedido", lvlRes]);
    // }
    // if(lvlRes === 2){
    //   this.dataService.lvlName = 'Secretaria'
    //   this.router.navigate(["gestion-chofer", lvlRes]);
    // }
    // if(lvlRes === 3){
    //   this.dataService.lvlName = 'Admin'
    //   this.router.navigate(["gestion-secretaria", lvlRes]);
    // }
    // if(lvlRes === 0){
    //   alert("Usuario o contraseña invalido")
    // }
    // return
  }

  ngOnInit() {
    //console.log(this.dataService.nombreUser$);
    //console.log(history.state.userName)
  }
}