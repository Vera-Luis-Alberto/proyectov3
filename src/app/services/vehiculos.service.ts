import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { VehiculoInterface } from '../interfaces/vehiculoInterface';

@Injectable({
  providedIn: 'root'
})
export class VehiculoService {
  private baseUrl = 'https://localhost:7291/api';

  constructor(private http: HttpClient) { }

  getVehiculo(): Observable<VehiculoInterface[]> {
    return this.http.get<VehiculoInterface[]>(this.baseUrl+'/Vehiculos/GetVehiculos');
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