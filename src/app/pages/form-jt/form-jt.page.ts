import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-jt',
  templateUrl: './form-jt.page.html',
  styleUrls: ['./form-jt.page.scss'],
})
export class FormJTPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('fallaUno', { read: ElementRef }) fallaUno: ElementRef;
  @ViewChild('fallaDos', { read: ElementRef }) fallaDos: ElementRef;
  @ViewChild('selectLugar', { read: ElementRef }) lugarAtencion: ElementRef;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  show(event){ 
    console.log("Mensaje:"+this.lugarAtencion.nativeElement.value);
    if(event.target.value==="Rescate")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }

}
