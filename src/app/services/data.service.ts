import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient ) { }

  getPost() {
    return this.http.get('http://settepitijuana.ddns.net:8080/CUFUS/');
  }

  getResportes() {
    return this.http.get('http://settepitijuana.ddns.net:8080/CUFUS/Index.php?ReporteId=2030');
  }

}
