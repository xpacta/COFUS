import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import { NavigationExtras, Router } from '@angular/router';
import { DomSanitizer, SafeHtml } from '@angular/platform-browser';
import { ModalController } from '@ionic/angular';
import { ReporteInfoPage } from '../reporte-info/reporte-info.page';

// tslint:disable-next-line: class-name
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
  IdOneSignal: string;
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
  iModal: any;

  constructor(private modalctrl: ModalController, private dataService: DataService, private router: Router, private sanitizer: DomSanitizer) {}
  /* Nota Alfredo Ruelas 26-11-2020
  ///declaramos una nueva variable y le dedimos el tipado que tiene la respuesta del server
  ///obvio esto puede cambiar. */
  reportes: reporte[] = [];
  usuario: string;
  perfil: any;
  IdOneSignal: any;

  public getHtmlWithBypassedSecurity(code: string): SafeHtml {
    return this.sanitizer.bypassSecurityTrustHtml(code);
  }
  ngOnInit(){
    this.usuario = localStorage.getItem('user');
    this.perfil = localStorage.getItem('perfil');
    this.IdOneSignal = localStorage.getItem('idOneSignal');
    //console.log("usuario: "+localStorage.getItem('idOneSignal'));
    this.indicador = 1;

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
    if (this.perfil === '0'){
      this.btnJT.nativeElement.disabled = false;
    }
    else{
      this.btnJT.nativeElement.disabled = true;
    }

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
    if (event.target.value === '0'){
     this.indicador = 1;
    }else{
      this.indicador = 2;
      this.iEstatus = event.target.value;
    }
  }

  redireccionar(estatus, id){
    this.iModal = 0;
    console.log('estatus' + estatus);
    const queryParams: any = {};
    this.arrayOfValue = this.getFilteredByKey(this.reportes, 'Id', id);
    queryParams.myArray = JSON.stringify(this.arrayOfValue);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    if (estatus === '1' && this.perfil === '1'){ // Por atender
      this.router.navigate(['/form-gm', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '5' && this.perfil === '2'){// Citado
      this.router.navigate(['/form-cr', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '2' && this.perfil === '1'){// En proceso
      this.router.navigate(['/form-mec', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '3' && this.perfil === '1'){// Por refaccion
      this.router.navigate(['/form-mec', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '6' && this.perfil === '3'){// Validando
      this.router.navigate(['/form-ac', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '4' && this.perfil === '2'){// Disponible
      this.router.navigate(['/rescate-resol', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '8' && this.perfil === '4'){// Rescate
      this.router.navigate(['/rescate-info', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '9' && this.perfil === '4'){// Atendiendo rescate
      this.router.navigate(['/form-rescate'], navigationExtras); this.iModal = 1;
    }
    if (this.iModal === 0){
    this.openInfo(this.arrayOfValue);
    }
    /*Para pruebas
    if (estatus === '1'){ // Por atender
      this.router.navigate(['/form-gm', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '5' ){// Citado
      this.router.navigate(['/form-cr', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '2' ){// En proceso
      this.router.navigate(['/form-mec', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '3' ){// Por refaccion
      this.router.navigate(['/form-mec', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '6' ){// Validando
      this.router.navigate(['/form-ac', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '4' ){// Disponible
      this.router.navigate(['/rescate-resol', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '8' ){// Rescate
      this.router.navigate(['/rescate-info', id], navigationExtras); this.iModal = 1;
    }
    if (estatus === '9'){// Atendiendo rescate
      this.router.navigate(['/form-rescate'], navigationExtras); this.iModal = 1;
    }
    if (this.iModal === 0){
    this.openInfo(this.arrayOfValue);
    }*/
  }

  async openInfo(array){
   const modal = await this.modalctrl.create({
      component: ReporteInfoPage,
      componentProps: {
        IdUnidad: array[0].IdUnidad,
        IdCufus: array[0].Id,
        FechaCita: array[0].FechaDeCita,
        Fallas: array[0].Fallas,
        Criticidad: array[0].NCriticidad,
        LugarAtencion: array[0].NLugar,
        Estatus: array[0].Estatus
      }
    });
   await modal.present();
  }

  doRefresh(event) {
    setTimeout(() => {
      console.log('Async operation has ended');
      this.dataService.getPost()
    .subscribe( (data: reporte[]) => {
      this.reportes = data;
      console.log(data);
    } );
      event.target.complete();
    }, 2000);
  }

  editar(estatus, id){
    console.log('estatus en editar' + estatus);
    const queryParams: any = {};
    this.arrayOfValue = this.getFilteredByKey(this.reportes, 'Id', id);
    queryParams.myArray = JSON.stringify(this.arrayOfValue);

    // Create our 'NaviationExtras' object which is expected by the Angular Router
    const navigationExtras: NavigationExtras = {
      queryParams
    };
    if (estatus === '1' && this.perfil === '0'){
      this.router.navigate(['/form-edit'], navigationExtras);
    }
  }

  getFilteredByKey(array, key, value) {
    // tslint:disable-next-line: only-arrow-functions
    return array.filter(function(e) {
      return e[key] === value;
    });
  }

}
