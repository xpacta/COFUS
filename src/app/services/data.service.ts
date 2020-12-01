import { HttpClient, HttpHeaders } from '@angular/common/http';
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

  postReporte(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/SaveData.php',datos,{headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateCita(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateCita.php',datos,{headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateLlegada(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateLlegada.php',datos,{headers: new HttpHeaders({"content-Type":"application/json"})});
  }

}
