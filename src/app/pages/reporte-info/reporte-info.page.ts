import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { ModalController } from '@ionic/angular';

@Component({
  selector: 'app-reporte-info',
  templateUrl: './reporte-info.page.html',
  styleUrls: ['./reporte-info.page.scss'],
})
export class ReporteInfoPage implements OnInit {

  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('fechacita', { read: ElementRef }) fechacita: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('criticidad', { read: ElementRef }) criticidad: ElementRef;
  @ViewChild('lugaratencion', { read: ElementRef }) lugaratencion: ElementRef;

  @Input() IdUnidad;
  @Input() IdCufus;
  @Input() FechaCita;
  @Input() Fallas;
  @Input() Criticidad;
  @Input() LugarAtencion;
  arraysplit: any;

  constructor(private modalctrl: ModalController) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.idunidad.nativeElement.value = this.IdUnidad;
    this.fechacita.nativeElement.value = this.FechaCita;
    this.arraysplit = this.Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    this.criticidad.nativeElement.value = this.Criticidad;
    this.lugaratencion.nativeElement.value = this.LugarAtencion;
  }
  cerrar(){
    this.modalctrl.dismiss();
  }

}
