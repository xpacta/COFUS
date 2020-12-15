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

  getReportes(id) {
    return this.http.get('http://settepitijuana.ddns.net:8080/CUFUS/Index.php?ReporteId=' + id);
  }

  getUsuario(id) {
    return this.http.get('http://settepitijuana.ddns.net:8080/CUFUS/buscarRol.php?Id=' + id);
  }

  postReporte(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/SaveData.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateCita(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateCita.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateLlegada(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateLlegada.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateDiagnostico(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateMec.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateCalidad(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateCalidad.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateEntrega(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateEntrega.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateRescate(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateRescate.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

  updateReporte(datos) {
    return this.http.post('http://settepitijuana.ddns.net:8080/CUFUS/updateReporte.php', datos, {headers: new HttpHeaders({"content-Type":"application/json"})});
  }

}
