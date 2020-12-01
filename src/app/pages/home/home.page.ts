import { Component, OnInit } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavigationExtras, Router } from '@angular/router';

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
  NEstatus: string;
  NProceso: string;
  NCriticidad: string;
  NLugar: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})

export class HomePage implements OnInit{
  arrayOfValue: any;
   
  constructor( private dataService: DataService,private router: Router) {}
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
      // console.log(data1);
    } );

  }
  ionViewWillEnter(){
        this.dataService.getPost()
      /*para que se pueda llenar la variable con tipado debemos de tipar tambien el dato
        se recibe* poniendo el dato entre (data : tipado[]) */
    .subscribe( (data: reporte[]) => {
      /*le decimos que esto va dentro de la variabe con tipado.*/
      this.reportes = data;
     // console.log(data);
    } );

    this.dataService.getResportes()
    .subscribe( data1 => {
     //  console.log(data1);
    } );
  }

  redireccionar(estatus,id){
    const queryParams: any = {};
    this.arrayOfValue=this.getFilteredByKey(this.reportes,"Id",id);
    queryParams.myArray = JSON.stringify(this.arrayOfValue);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    if(estatus=="1")
      this.router.navigate(['/form-gm',id],navigationExtras);
    if(estatus=="5")
      this.router.navigate(['/form-cr',id],navigationExtras);
    if(estatus=="2")
      this.router.navigate(['/form-mec',id],navigationExtras);
  }

  getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

}
