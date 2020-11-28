import { JsonPipe } from '@angular/common';
import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-form-jt',
  templateUrl: './form-jt.page.html',
  styleUrls: ['./form-jt.page.scss'],
})
export class FormJTPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('fallaUno', { read: ElementRef }) fallaUno: ElementRef;
  @ViewChild('fallaDos', { read: ElementRef }) fallaDos: ElementRef;
  @ViewChild('fallaTres', { read: ElementRef }) fallaTres: ElementRef;
  @ViewChild('fallaCuatro', { read: ElementRef }) fallaCuatro: ElementRef;
  @ViewChild('selectLugar', { read: ElementRef }) lugarAtencion: ElementRef;
  @ViewChild('selectCriticidad', { read: ElementRef }) selectCriticidad: ElementRef;
  @ViewChild('idVehiculo', { read: ElementRef }) idVehiculo: ElementRef;
  @ViewChild('contactoOperador', { read: ElementRef }) contactoOperador: ElementRef;
  @ViewChild('otrodomicilio', { read: ElementRef }) otrodomicilio: ElementRef;
  
  constructor(private renderer: Renderer2,private dataService: DataService) { }

  ngOnInit() {
    
  }
  
  show(event){ 
    console.log("Mensaje:"+this.lugarAtencion.nativeElement.value);
    if(event.target.value==="Rescate")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }
  
  onClick(){
    var fallas: string;
    fallas = `${this.fallaUno.nativeElement.value} ${this.fallaDos.nativeElement.value} ${this.fallaTres.nativeElement.value} ${this.fallaCuatro.nativeElement.value}`;
    fallas=fallas.replace(" ","-");

    //console.log(fallas); 
    var datos = { IdUnidad: this.idVehiculo.nativeElement.value, 
                  Fallas: fallas,
                  Contacto: this.contactoOperador.nativeElement.value, Criticidad: this.selectCriticidad.nativeElement.value,
                  LugarDeAtencion: this.lugarAtencion.nativeElement.value,Estatus:"1",Process:"1",Direccion: ""
                };

    this.dataService.postReporte(datos).subscribe(data=>{
      console.log(data);
    });
 
  }

}
