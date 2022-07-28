import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { groupBy, mergeMap, toArray } from 'rxjs/operators';

//const _ = require('loadash')

@Component({
  selector: 'app-data-info',
  templateUrl: './data-info.component.html',
  styleUrls: ['./data-info.component.css'],
})
export class DataInfoComponent implements OnInit {
  constructor(public data: DataService) {}

  dataSource: any[] = [];
  displayColumns: string[] = [];

  ngOnInit(): void {
    this.displayColumns = [
      'rowIdProducto',
      'numProducto',
      'descripcion',
      'familia',
      'estado',
      'codigoProducto',
      'marca',
      'tipo',
      'tipoTarjeta',
      'moneda',
      'tipoProducto',
      'cuentaRelacionada'
    ];
    this.data.getData().subscribe((data) => {
      let dataGroup = this.groupBy(data, 'estado');
      this.dataSourceGroup(dataGroup);
      console.log(this.dataSource);
    });
  }

  groupBy(xs: any, key: any) {
    return xs.reduce((rv: any, x: any) => {
      (rv[x[key]] = rv[x[key]] || []).push(x);
      return rv;
    }, {});
  }

  dataSourceGroup(dataGroup: any) {
    Object.keys(dataGroup).forEach((key) => {
      this.dataSource.push({ group: key, isGroup: true });
      let values = dataGroup[key];
      values.forEach((element: any) => {
        this.dataSource.push(element);
      });
    });
  }

}
