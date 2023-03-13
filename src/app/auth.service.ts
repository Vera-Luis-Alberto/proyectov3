import { Injectable, Query } from '@angular/core';
import { AdminInterface } from './interfaces/adminInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  baseUrl: string = 'https://localhost:7291/api/Empleados/Login'
  constructor(private http: HttpClient) { }

  login(user: AdminInterface){
    console.log(this.http.post(`${this.baseUrl}?Cedula=${user.cedula}&Contraseña=${user.contraseña}`, "{}"))
    return this.http.post(`${this.baseUrl}?Cedula=${user.cedula}&Contraseña=${user.contraseña}`, "{}");
  }
}
