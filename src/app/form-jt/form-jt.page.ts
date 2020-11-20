import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-jt',
  templateUrl: './form-jt.page.html',
  styleUrls: ['./form-jt.page.scss'],
})
export class FormJTPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  
  constructor(private renderer: Renderer2) { }

  ngOnInit() {
  }
  
  show(event){ 
    console.log(event.target.value);
    if(event.target.value==="Rescate")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }

}
