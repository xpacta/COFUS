import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-form-ac',
  templateUrl: './form-ac.page.html',
  styleUrls: ['./form-ac.page.scss'],
})
export class FormAcPage implements OnInit {

  private id: any;
  arrayOfValues: any;
  arraysplit: any;
  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('estatus', { read: ElementRef }) estatus: ElementRef;
  @ViewChild('comentarios', { read: ElementRef }) comentarios: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }
  ngOnInit(): void {
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('id');
    });

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    if(this.arrayOfValues===null){
      console.log('null: entonces busca:' + this.id);
      this.dataService.getReportes(this.id)
    .subscribe( data1 => {
       // console.log(data1);
    this.arrayOfValues = JSON.stringify(data1);
    this.arrayOfValues = JSON.parse(this.arrayOfValues);
    console.log(this.arrayOfValues[0].IdUnidad);
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    // this.estatus.nativeElement.value = this.arrayOfValues[0].Estatus;
    } );
    }else{
    this.idcufus.nativeElement.value = this.arrayOfValues[0].Id;
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
    this.arraysplit = this.arrayOfValues[0].Fallas.split('-');
    this.falla1.nativeElement.value = this.arraysplit[0];
    this.falla2.nativeElement.value = this.arraysplit[1];
    this.falla3.nativeElement.value = this.arraysplit[2];
    this.falla4.nativeElement.value = this.arraysplit[3];
    // this.estatus.nativeElement.value = this.arrayOfValues[0].Estatus;
    }
  }
  enviar(): void{
    if (this.estatus.nativeElement.value === ''){
      alert('Falta rellenar campo de estatus');
    }else{
    const queryParams: any = {};
    queryParams.myArray = JSON.stringify(this.arrayOfValues);
    const datos = {
      Id: this.arrayOfValues[0].Id,
      Estatus: this.estatus.nativeElement.value,
      Comentarios: this.comentarios.nativeElement.value,
      IdUnidad: this.arrayOfValues[0].IdUnidad,
    };
    console.log(datos);
    this.dataService.updateCalidad(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Enviado correctamente'
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
}
