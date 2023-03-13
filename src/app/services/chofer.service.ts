import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChoferInterface } from '../interfaces/choferInterface';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  private baseUrl = 'https://localhost:7291/api';
  private httpOptions: Object = new Object();

  constructor(private http: HttpClient) { 
    this.httpOptions = {
      headers: new HttpHeaders({
        'Content-Type':  'application/json',
        'Access-Control-Allow-Origin': '*',
        'Authorization': `Bearer ${JSON.parse(localStorage.getItem('currentUser') as string)?.token}`
      })
    };
    console.log(this.httpOptions);
  }

  getChofer(): Observable<ChoferInterface[]> {
    return this.http.get<ChoferInterface[]>(this.baseUrl+'/Empleados/BuscarChoferes', this.httpOptions);
  }

  deleteChofer(ci : string): Observable<ChoferInterface[]> {
    return this.http.delete<ChoferInterface[]>(this.baseUrl+'/Empleados/DeleteEmpleado?cedula=' + ci,this.httpOptions);
  }

  updateChofer(ci : string, nombre: string): Observable<ChoferInterface[]> {
    return this.http.put<ChoferInterface[]>(this.baseUrl+'/Empleados/UpdateEmpleados?ci='+ ci + '&nombre='+ nombre,this.httpOptions);
  }

  /*addChoferInterface(ChoferInterface: ChoferInterface): Observable<any> {
    const params = new HttpParams()
      .set('ruc', ChoferInterface.ruc)
      .set('nombre', ChoferInterface.nombre)
      .set('representante', ChoferInterface.representanteLegal)
      .set('direccion', ChoferInterface.direccion)
      .set('telefono', ChoferInterface.telefono);
        console.log(this.baseUrl+"/AgregarChoferInterfacees"+params);
    return this.http.put<any>(this.baseUrl+"/AgregarChoferInterfacees", {}, { params });
  }
  

*/}