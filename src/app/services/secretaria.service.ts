import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SecretariaInterface } from '../interfaces/secretariaInterface';

@Injectable({
  providedIn: 'root'
})
export class SecretariaService {
  private baseUrl = 'https://localhost:7291/api';

  constructor(private http: HttpClient) { }

  getSecretaria(): Observable<SecretariaInterface[]> {
    return this.http.get<SecretariaInterface[]>(this.baseUrl+'/Empleados/BuscarSecretarias');
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