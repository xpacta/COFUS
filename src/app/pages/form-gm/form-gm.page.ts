import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
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

  arrayOfValues: any;
  arraysplit: any;
  id: string;
  public reporteUpdate : FormGroup;

  constructor(private renderer: Renderer2,private route: ActivatedRoute,private router: Router,private dataService: DataService,private formBuilder: FormBuilder) { 
    this.reporteUpdate = this.formBuilder.group({
      fechaCita: ['', Validators.required],
      lugaratencion: ['', Validators.required]
    });
  }
  
  ngOnInit() {
    
  }

  
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id=paramMap.get('id');
    })
    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    this.idunidad.nativeElement.value=this.arrayOfValues[0].IdUnidad;
    this.arraysplit=this.arrayOfValues[0].Fallas.split("-");
        this.falla1.nativeElement.value=this.arraysplit[0];
        this.falla2.nativeElement.value=this.arraysplit[1];
        this.falla3.nativeElement.value=this.arraysplit[2];
        this.falla4.nativeElement.value=this.arraysplit[3];
    this.criticidad.nativeElement.value=this.arrayOfValues[0].NCriticidad;
    this.lugarjt.nativeElement.value=this.arrayOfValues[0].NLugar;
    
  }

  enviar(){
    if(this.reporteUpdate.valid){  
    const datos={
      Id: this.arrayOfValues[0].Id,
      FechaCita: `${moment(this.fechacita.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fechacita.nativeElement.value).format('HH:mm')}`,
      Direccion: this.ubicacion.nativeElement.value,
      Estatus: "5",
      Proceso: "2"
    };
    this.dataService.updateCita(datos).subscribe(data=>{
      console.log(data);
      Swal.fire({
        allowOutsideClick: false,
        icon: "success",
        text: 'Cita asignada correctamente'
      });
      this.router.navigateByUrl('/home');
    });
  }else{
    alert("Falta rellenar algunos campos");
  }
  }

  show(event){ 
    console.log("Mensaje:"+event.target.value);
    if(event.target.value==="6")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }



}
