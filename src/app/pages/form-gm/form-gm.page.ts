import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-gm',
  templateUrl: './form-gm.page.html',
  styleUrls: ['./form-gm.page.scss'],
})
export class FormGmPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('fechacita', { read: ElementRef }) fechacita: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('criticidad', { read: ElementRef }) criticidad: ElementRef;
  @ViewChild('lugarjt', { read: ElementRef }) lugarjt: ElementRef;
  @ViewChild('lugaratencion', { read: ElementRef }) lugaratencion: ElementRef;
  @ViewChild('ubicacion', { read: ElementRef }) ubicacion: ElementRef;
  @ViewChild('iditemlugar', { read: ElementRef }) iditemlugar: ElementRef;
  @ViewChild('iditemfecha', { read: ElementRef }) iditemfecha: ElementRef;

  arrayOfValues: any;
  arraysplit: any;
  id: string;
  public reporteUpdate: FormGroup;

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {
    this.reporteUpdate = this.formBuilder.group({
      fechaCita: ['', Validators.required],
      lugaratencion: ['', Validators.required]
    });
  }
  ngOnInit() {
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('id');
    });
    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    this.criticidad.nativeElement.value = this.arrayOfValues[0].NCriticidad;
    this.lugarjt.nativeElement.value = this.arrayOfValues[0].NLugar;
    if (this.arrayOfValues[0].LugarDeAtencion === '6'){
      this.ubicacion.nativeElement.value = this.arrayOfValues[0].Direccion;
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    }
  }

  enviar(): void{
    if (this.reporteUpdate.valid){
      if (this.lugaratencion.nativeElement.value !== '6'){
    const datos = {
      Id: this.arrayOfValues[0].Id,
      FechaCita: `${moment(this.fechacita.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fechacita.nativeElement.value).format('HH:mm')}`,
      Direccion: this.ubicacion.nativeElement.value,
      Estatus: '5',
      Proceso: '2',
      IdOneSignal: this.arrayOfValues[0].IdOneSignal,
      IdUnidad: this.arrayOfValues[0].IdUnidad
    };
    this.dataService.updateCita(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Cita asignada correctamente'
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
  else{
    const datos = {
      Id: this.arrayOfValues[0].Id,
      FechaCita: `${moment(this.fechacita.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fechacita.nativeElement.value).format('HH:mm')}`,
      Direccion: this.ubicacion.nativeElement.value,
      Estatus: '8',
      Proceso: '4',
      IdOneSignal: this.arrayOfValues[0].IdOneSignal,
      IdUnidad: this.arrayOfValues[0].IdUnidad
    };
    this.dataService.updateCita(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Orden generada correctamente'
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
  }else{
    if (this.reporteUpdate.value.fechaCita==""){
      this.iditemfecha.nativeElement.classList.add("invalid");
    }
    if (this.reporteUpdate.value.lugaratencion==""){
      this.iditemlugar.nativeElement.classList.add("invalid");
    }
    alert('Falta rellenar algunos campos');
  }
  }

  show(event){
    if (event.target.value === '6'){
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    }
    else{
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
    }
  }
}
