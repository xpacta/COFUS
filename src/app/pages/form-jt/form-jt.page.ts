import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';
import {Validators, FormBuilder, FormGroup } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';


@Component({
  selector: 'app-form-jt',
  templateUrl: './form-jt.page.html',
  styleUrls: ['./form-jt.page.scss'],
})
export class FormJTPage implements OnInit {
  public reporteInicial: FormGroup;
  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('fallaUno', { read: ElementRef }) fallaUno: ElementRef;
  @ViewChild('fallaDos', { read: ElementRef }) fallaDos: ElementRef;
  @ViewChild('fallaTres', { read: ElementRef }) fallaTres: ElementRef;
  @ViewChild('fallaCuatro', { read: ElementRef }) fallaCuatro: ElementRef;
  @ViewChild('selectLugar', { read: ElementRef }) lugarAtencion: ElementRef;
  @ViewChild('selectCriticidad', { read: ElementRef }) selectCriticidad: ElementRef;
  @ViewChild('idVehiculo', { read: ElementRef }) idVehiculo: ElementRef;
  @ViewChild('iditemvehiculo', { read: ElementRef }) iditemvehiculo: ElementRef;
  @ViewChild('idoperador', { read: ElementRef }) idoperador: ElementRef;
  @ViewChild('iditemfalla', { read: ElementRef }) iditemfalla: ElementRef;
  @ViewChild('iditemcriticidad', { read: ElementRef }) iditemcriticidad: ElementRef;
  @ViewChild('iditemlugar', { read: ElementRef }) iditemlugar: ElementRef;
  @ViewChild('contactoOperador', { read: ElementRef }) contactoOperador: ElementRef;
  @ViewChild('otrodomicilio', { read: ElementRef }) otrodomicilio: ElementRef;

  constructor(private renderer: Renderer2, private router: Router, private dataService: DataService, private formBuilder: FormBuilder) {
    this.reporteInicial = this.formBuilder.group({
      idVehiculo: ['', Validators.required],
      fallaUno: ['', Validators.required],
      selectLugar: ['', Validators.required],
      selectCriticidad: ['', Validators.required],
      contactoOperador: ['', Validators.required]
    });
  }

  ngOnInit() {
  }
  show(event){
    if (event.target.value === '6'){
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    }
    else{
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
    }
  }

  onClick(){
    console.log(this.reporteInicial.value.fallaUno);
    if (this.reporteInicial.valid){
      
    let fallas: string;
    fallas = `${this.fallaUno.nativeElement.value}-${this.fallaDos.nativeElement.value}-${this.fallaTres.nativeElement.value}-${this.fallaCuatro.nativeElement.value}`;
    // fallas=fallas.replace(" ","-");

    // console.log(fallas);
    const datos = { IdUnidad: this.idVehiculo.nativeElement.value,
                  Fallas: fallas,
                  Contacto: this.contactoOperador.nativeElement.value, Criticidad: this.selectCriticidad.nativeElement.value,
                  LugarDeAtencion: this.lugarAtencion.nativeElement.value, Estatus: '1', Process: '1', Direccion: this.otrodomicilio.nativeElement.value,
                  IdOneSignal: localStorage.getItem('idOneSignal')
                };

    this.dataService.postReporte(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Reporte guardado correctamente' + ` #CUFUS: ${data}`
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
    if (this.reporteInicial.value.idVehiculo==""){
      this.iditemvehiculo.nativeElement.classList.add("invalid");
    }
    if (this.reporteInicial.value.fallaUno==""){
      this.iditemfalla.nativeElement.classList.add("invalid");
    }
    if (this.reporteInicial.value.selectCriticidad==""){
      this.iditemcriticidad.nativeElement.classList.add("invalid");
    }
    if (this.reporteInicial.value.selectLugar==""){
      this.iditemlugar.nativeElement.classList.add("invalid");
    }
    if (this.reporteInicial.value.contactoOperador==""){
      this.idoperador.nativeElement.classList.add("invalid");
    }
    alert('Falta rellenar algunos campos');
  }
  }

}
