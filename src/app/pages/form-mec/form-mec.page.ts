import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import * as moment from 'moment';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-mec',
  templateUrl: './form-mec.page.html',
  styleUrls: ['./form-mec.page.scss'],
})
export class FormMecPage implements OnInit {

  private id: any;
  arrayOfValues: any;
  arraysplit: any;
  @ViewChild('fecha', { read: ElementRef }) fecha: ElementRef;
  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('estatus', { read: ElementRef }) estatus: ElementRef;
  @ViewChild('diagnostico', { read: ElementRef }) diagnostico: ElementRef;
  @ViewChild('comentarios', { read: ElementRef }) comentarios: ElementRef;

  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('id');
    });
    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    this.estatus.nativeElement.value = this.arrayOfValues[0].Estatus;
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.fecha.nativeElement.value = (new Date().toISOString());
  }

  enviar(): void{
    const datos = {
      Id: this.arrayOfValues[0].Id,
      Fecha: `${moment(this.fecha.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fecha.nativeElement.value).format('HH:mm')}`,
      Estatus: this.estatus.nativeElement.value,
      Diagnostico: this.diagnostico.nativeElement.value,
      IdUnidad: this.arrayOfValues[0] .IdUnidad,
      IdOneSignal: this.arrayOfValues[0].IdOneSignal,
      Comentarios: this.comentarios.nativeElement.value
    };
    this.dataService.updateDiagnostico(datos).subscribe(data => {
      console.log(data);
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
      this.router.navigateByUrl('/home');
    });
  }

}
