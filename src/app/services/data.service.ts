import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private http: HttpClient) { }

  getData() : Observable<any>{
    return this.http.get<any>('../../assets/data.json');
  }

}

export interface ObjectData {
  rowIdProducto: string,
    numProducto: string,
    descripcion: string,
    familia: string,
    estado: string,
    codigoProducto: string,
    marca: string,
    tipo: string,
    tipoTarjeta: string,
    moneda: string,
    tipoProducto: string,
    cuentaRelacionada: any
}

