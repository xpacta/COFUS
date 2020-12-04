import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavigationExtras, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';

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
  indicador: any;
  @ViewChild('menu', { read: ElementRef }) menu: ElementRef;
  @ViewChild('btnJT', { read: ElementRef }) btnJT: ElementRef;
  iEstatus: string;

  constructor( private dataService: DataService,private router: Router,private sanitizer: DomSanitizer) {}
  /* Nota Alfredo Ruelas 26-11-2020
  ///declaramos una nueva variable y le dedimos el tipado que tiene la respuesta del server
  ///obvio esto puede cambiar. */
  reportes: reporte[] = [];
  usuario: string;
  perfil: any;

  public getHtmlWithBypassedSecurity(code: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(code);
  }   
  ngOnInit(){
     this.usuario = localStorage.getItem('user');
    this.perfil= localStorage.getItem('perfil');

    this.indicador=1;

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
    if(this.perfil=="0")
      this.btnJT.nativeElement.disabled=false;
    else
      this.btnJT.nativeElement.disabled=true;

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

  show(event){
    if(event.target.value=="0"){
     this.indicador=1;
    }else{this.indicador=2
      this.iEstatus=event.target.value;
    }
  }

  redireccionar(estatus,id){
    console.log("estatus"+estatus);
    const queryParams: any = {};
    this.arrayOfValue=this.getFilteredByKey(this.reportes,"Id",id);
    queryParams.myArray = JSON.stringify(this.arrayOfValue);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    if(estatus=="1" && this.perfil=="1") //Por atender
      this.router.navigate(['/form-gm',id],navigationExtras);

    if(estatus=="5" && this.perfil=="2")//Citado
      this.router.navigate(['/form-cr',id],navigationExtras);

    if(estatus=="2" && this.perfil=="1")//En proceso
      this.router.navigate(['/form-mec',id],navigationExtras);

    if(estatus=="3" && this.perfil=="1")//Por refaccion
      this.router.navigate(['/form-mec',id],navigationExtras);

    if(estatus=="6" && this.perfil=="3")//Validando
      this.router.navigate(['/form-ac',id],navigationExtras);  

    if(estatus=="4" && this.perfil=="2")//Disponible
      this.router.navigate(['/rescate-resol',id],navigationExtras);  

    if(estatus=="8" && this.perfil=="4")//Rescate
      this.router.navigate(['/rescate-info',id],navigationExtras);

    if(estatus=="9" && this.perfil=="4")//Atendiendo rescate
      this.router.navigate(['/form-rescate'],navigationExtras);    
  }

  getFilteredByKey(array, key, value) {
    return array.filter(function(e) {
      return e[key] == value;
    });
  }

}
