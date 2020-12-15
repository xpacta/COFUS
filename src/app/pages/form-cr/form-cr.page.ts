import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-cr',
  templateUrl: './form-cr.page.html',
  styleUrls: ['./form-cr.page.scss'],
})
export class FormCrPage implements OnInit {

  private id: any;
  private datos1: any;
  arrayOfValues: any;
  arraysplit: any;
  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('llegada', { read: ElementRef }) llegada: ElementRef;
  @ViewChild('fechacita', { read: ElementRef }) fechacita: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('criticidad', { read: ElementRef }) criticidad: ElementRef;
  @ViewChild('lugarjt', { read: ElementRef }) lugarjt: ElementRef;
  @ViewChild('lugaratencion', { read: ElementRef }) lugaratencion: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('id');
    });
    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    if (this.arrayOfValues === null){
      console.log('null: entonces busca:' + this.id);
      this.dataService.getReportes(this.id)
    .subscribe( data1 => {
       // console.log(data1);
    this.arrayOfValues = JSON.stringify(data1);
    this.arrayOfValues = JSON.parse(this.arrayOfValues);
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.fechacita.nativeElement.value = this.arrayOfValues[0].FechaDeCita;
    this.fechacita.nativeElement.value = this.arrayOfValues[0].FechaDeCita;
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    console.log(this.arraysplit);
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    this.criticidad.nativeElement.value = this.arrayOfValues[0].NCriticidad;
    } );
    }else{
      this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
      this.fechacita.nativeElement.value = this.arrayOfValues[0].FechaDeCita;
      this.fechacita.nativeElement.value = this.arrayOfValues[0].FechaDeCita;
      this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
      this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
      console.log(this.arraysplit);
      this.falla1.nativeElement.value = this.arraysplit[0];
      this.falla2.nativeElement.value = this.arraysplit[1];
      this.falla3.nativeElement.value = this.arraysplit[2];
      this.falla4.nativeElement.value = this.arraysplit[3];
      this.criticidad.nativeElement.value = this.arrayOfValues[0].NCriticidad;
    }
  }

  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit(): void {
    this.llegada.nativeElement.value = (new Date().toISOString());
  }

  enviar(): void{
    const datos = {
      Id: this.arrayOfValues[0].Id,
      FechaLlegada: `${moment(this.llegada.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.llegada.nativeElement.value).format('HH:mm')}`,
      Estatus: '2',
      Proceso: '3',
      IdUnidad: this.arrayOfValues[0].IdUnidad
    };
    this.dataService.updateLlegada(datos).subscribe(data => {
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Entrada registrada correctamente'
        });
      }else{
        Swal.fire({
          allowOutsideClick: true,
          icon: 'error',
          text: 'Ocurrió un error. Vuelva a intentarlo.'
        });
      }
      this.router.navigateByUrl('/home');
    });
  }
}
