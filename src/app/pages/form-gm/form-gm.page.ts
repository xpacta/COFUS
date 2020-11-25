import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-form-gm',
  templateUrl: './form-gm.page.html',
  styleUrls: ['./form-gm.page.scss'],
})
export class FormGmPage implements OnInit {

  @ViewChild('direccion', { read: ElementRef }) direccion: ElementRef;
  @ViewChild('rescatejt', { read: ElementRef }) rescatejt: ElementRef;
  
  constructor(private renderer: Renderer2) { }
  
  ngOnInit() {
    
  }
  ngAfterViewInit() {
    console.log(this.rescatejt.nativeElement.value);
    if(this.rescatejt.nativeElement.value==="Rescate"){
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    }
  }
  
  show(event){ 
    console.log(this.rescatejt.nativeElement.value);
    if(event.target.value==="Rescate")
      this.renderer.setStyle(this.direccion.nativeElement, 'display', '');
    else
      this.renderer.setStyle(this.direccion.nativeElement, 'display', 'none');
  }

}
