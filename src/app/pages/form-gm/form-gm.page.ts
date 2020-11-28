import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import {ActivatedRoute,Router} from '@angular/router';
import { DataService } from '../../services/data.service';
import * as moment from 'moment';

@Component({
  selector: 'app-form-gm',
  templateUrl: './form-gm.page.html',
  styleUrls: ['./form-gm.page.scss'],
})
export class FormGmPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('rescatejt', { read: ElementRef }) rescatejt: ElementRef;
  @ViewChild('fechacita', { read: ElementRef }) fechacita: ElementRef;

  arrayOfValues: any;
  id: string;

  constructor(private renderer: Renderer2,private route: ActivatedRoute,private router: Router,private dataService: DataService) { 
  
  }
  
  ngOnInit() {
    
  }

  ngAfterViewInit() {
    console.log(this.rescatejt.nativeElement.value);
    if(this.rescatejt.nativeElement.value==="Rescate"){
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    }
  }
  
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id=paramMap.get('id');
    })
    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);

    console.log(this.arrayOfValues);
  }

  enviar(){
    const datos={
      Id: this.arrayOfValues[0].Id,
      FechaCita: `${moment(this.fechacita.nativeElement.value).format('YYYY-MM-DD')} ${moment(this.fechacita.nativeElement.value).format('HH:mm')}`,
      Estatus: "2",
      Proceso: "2"
    };
    this.dataService.updateCita(datos).subscribe(data=>{
      console.log(data);
    });
  }

  show(event){ 
    if(event.target.value==="Rescate")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }



}
