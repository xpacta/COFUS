import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-edit',
  templateUrl: './form-edit.page.html',
  styleUrls: ['./form-edit.page.scss'],
})
export class FormEditPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('contactoOperador', { read: ElementRef }) contactoOperador: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('selectCriticidad', { read: ElementRef }) criticidad: ElementRef;
  @ViewChild('selectLugar', { read: ElementRef }) lugaratencion: ElementRef;
  @ViewChild('otrodomicilio', { read: ElementRef }) ubicacion: ElementRef;

  arrayOfValues: any;
  arraysplit: any;
  id: string;

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.contactoOperador.nativeElement.value = this.arrayOfValues[0].Contacto;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    this.criticidad.nativeElement.value = this.arrayOfValues[0].Criticidad;
    this.lugaratencion.nativeElement.value = this.arrayOfValues[0].LugarDeAtencion;

    if (this.arrayOfValues[0].LugarDeAtencion === '6'){
      this.ubicacion.nativeElement.value = this.arrayOfValues[0].Direccion;
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
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

  actualizar(): void{
    let fallas: string;
    fallas = `${this.falla1.nativeElement.value}-${this.falla2.nativeElement.value}-${this.falla3.nativeElement.value}-${this.falla4.nativeElement.value}`;

    const datos = {
                  Id: this.arrayOfValues[0].Id,
                  IdUnidad: this.idunidad.nativeElement.value,
                  Fallas: fallas,
                  Contacto: this.contactoOperador.nativeElement.value, Criticidad: this.criticidad.nativeElement.value,
                  LugarDeAtencion: this.lugaratencion.nativeElement.value, Estatus: '1', Process: '1', Direccion: this.ubicacion.nativeElement.value,
                  IdOneSignal: localStorage.getItem('idOneSignal')
                };

    this.dataService.updateReporte(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
      Swal.fire({
        allowOutsideClick: false,
        icon: 'success',
        text: 'Reporte actualizado correctamente'
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
