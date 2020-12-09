import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rescate-resol',
  templateUrl: './rescate-resol.page.html',
  styleUrls: ['./rescate-resol.page.scss'],
})
export class RescateResolPage implements OnInit {
  private id: any;
  arrayOfValues: any;

  @ViewChild('idcufus', { read: ElementRef }) idcufus: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('fecha', { read: ElementRef }) fecha: ElementRef;
  @ViewChild('operador', { read: ElementRef }) operador: ElementRef;
  constructor(private renderer: Renderer2, private route: ActivatedRoute, private router: Router, private dataService: DataService) { }

  ngOnInit() {
  }
  // tslint:disable-next-line: use-lifecycle-interface
  ngAfterViewInit() {
    this.fecha.nativeElement.value = (new Date().toISOString());
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id = paramMap.get('id');
    });

    const myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(myArray);
    console.log(this.arrayOfValues);
    this.idunidad.nativeElement.value = this.arrayOfValues[0].IdUnidad;
  }

  enviar(){
    const datos = {
      Id: this.arrayOfValues[0].Id,
      Operador: this.operador.nativeElement.value,
      Estatus: '7',
      Proceso: '5',
      IdUnidad: this.arrayOfValues[0].IdUnidad,
      IdOneSignal: this.arrayOfValues[0].IdOneSignal
    };
    this.dataService.updateEntrega(datos).subscribe(data => {
      console.log(data);
      if (data !== 0){
        Swal.fire({
          allowOutsideClick: false,
          icon: 'success',
          text: 'Unidad entregada'
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
