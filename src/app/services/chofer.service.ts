import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ChoferInterface } from '../interfaces/choferInterface';

@Injectable({
  providedIn: 'root'
})
export class ChoferService {
  private baseUrl = 'https://localhost:7291/api';

  constructor(private http: HttpClient) { }

  getChofer(): Observable<ChoferInterface[]> {
    return this.http.get<ChoferInterface[]>(this.baseUrl+'/Empleados/BuscarChoferes');
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