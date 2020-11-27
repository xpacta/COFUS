import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';

interface reporte {
  Id: number;
  IdUnidad: number;
  Fallas: string;
  Contacto: number;
  Criticidad: string;
  LugarDeAtencion: string;
  Direccion: string;
  FechaDeLevantamiento: string;
  FechaDeCita: string;
  Estatus: string;
  Process: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  constructor( private dataService: DataService) {}
  /* Nota Alfredo Ruelas 26-11-2020
  ///declaramos una nueva variable y le dedimos el tipado que tiene la respuesta del server
  ///obvio esto puede cambiar. */
  reportes: reporte[] = [];

  ngOnInit(){
    
    this.dataService.getPost()
      /*para que se pueda llenar la variable con tipado debemos de tipar tambien el dato
        se recibe* poniendo el dato entre (data : tipado[]) */
    .subscribe( (data: reporte[]) => {
      /*le decimos que esto va dentro de la variabe con tipado.*/
      this.reportes = data;
      console.log(data);
    } );

    this.dataService.getResportes()
    .subscribe( data1 => {
       console.log(data1);
    } );


  }

}
