import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';
import * as moment from 'moment';

@Component({
  selector: 'app-form-rescate',
  templateUrl: './form-rescate.page.html',
  styleUrls: ['./form-rescate.page.scss'],
})
export class FormRescatePage implements OnInit {

  private id: any;
  arrayOfValues: any;
  arraysplit: any;
  myArray: any;
  address: string[];
  @ViewChild('fecha', { read: ElementRef }) fecha: ElementRef;
  @ViewChild('contacto', { read: ElementRef }) contacto: ElementRef;
  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('diagnostico', { read: ElementRef }) diagnostico: ElementRef;

  constructor(private renderer: Renderer2,private route: ActivatedRoute,private router: Router,private dataService: DataService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(this.myArray);
    this.address = this.arrayOfValues[0].Direccion.split(' ').join('+');
    console.log(this.address);
    this.contacto.nativeElement.innerHTML = this.arrayOfValues[0].Contacto;
    this.contacto.nativeElement.href = 'tel:'+ this.arrayOfValues[0].Contacto;
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.direccion.nativeElement.href = 'https://www.google.com.mx/maps/place/' + this.address + ' ' + 'Tijuana';
    this.direccion.nativeElement.innerHTML = this.arrayOfValues[0].Direccion;

  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.fecha.nativeElement.value = (new Date().toISOString());
  }
  enviar(){
    const datos = {
      Id: this.arrayOfValues[0].Id,
      Estatus:'9',
      Fecha: `${moment(this.fecha.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fecha.nativeElement.value).format('HH:mm')}`,
      Diagnostico: this.diagnostico.nativeElement.value,
      IdUnidad: this.arrayOfValues[0].IdUnidad
    };
    this.dataService.updateDiagnostico(datos).subscribe(data => {
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Diagnostico guardado correctamente'
        });
      }else{
        Swal.fire({
          allowOutsideClick: true,
          icon: 'error',
          text: 'Ocurrió un error. Vuelva a intentarlo.'
        });
      }
      const queryParams: any = {};
      queryParams.myArray = JSON.stringify(this.arrayOfValues);
      const navigationExtras: NavigationExtras = {
        queryParams
      };
      this.router.navigate(['/rescate-resol', 1], navigationExtras);
    });
  }
  enviar2(){
    const datos = {
      Id: this.arrayOfValues[0].Id,
      Estatus: '1',
      Fecha: `${moment(this.fecha.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fecha.nativeElement.value).format('HH:mm')}`,
      Diagnostico: this.diagnostico.nativeElement.value,
      IdUnidad: this.arrayOfValues[0].IdUnidad
    };
    this.dataService.updateDiagnostico(datos).subscribe(data => {
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Diagnostico guardado correctamente'
        });
      }else{
        Swal.fire({
          allowOutsideClick: true,
          icon: 'error',
          text: 'Ocurrió un error. Vuelva a intentarlo.'
        });
      }
      const queryParams: any = {};
      queryParams.myArray = JSON.stringify(this.arrayOfValues);
      const navigationExtras: NavigationExtras = {
        queryParams
      };
      this.router.navigate(['/rescate-noresol'], navigationExtras);
    });
  }

}
