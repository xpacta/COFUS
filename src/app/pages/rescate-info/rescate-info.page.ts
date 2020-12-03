import { Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { DataService } from 'src/app/services/data.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-rescate-info',
  templateUrl: './rescate-info.page.html',
  styleUrls: ['./rescate-info.page.scss'],
})
export class RescateInfoPage implements OnInit {

  private id: any;
  arrayOfValues: any;
  arraysplit: any;
  myArray: any;
  

  @ViewChild('fecha', { read: ElementRef }) fecha: ElementRef;
  @ViewChild('idunidad', { read: ElementRef }) idunidad: ElementRef;
  @ViewChild('falla1', { read: ElementRef }) falla1: ElementRef;
  @ViewChild('falla2', { read: ElementRef }) falla2: ElementRef;
  @ViewChild('falla3', { read: ElementRef }) falla3: ElementRef;
  @ViewChild('falla4', { read: ElementRef }) falla4: ElementRef;
  @ViewChild('criticidad', { read: ElementRef }) criticidad: ElementRef;
  @ViewChild('ubicacion', { read: ElementRef }) ubicacion: ElementRef;

  constructor(private renderer: Renderer2,private route: ActivatedRoute,private router: Router,private dataService: DataService) { }

  ngOnInit() {
  }
  ionViewWillEnter(){
    this.route.paramMap.subscribe(paramMap => {
       this.id=paramMap.get('id');
    })
    
     this.myArray = this.route.snapshot.queryParamMap.get('myArray');
    this.arrayOfValues = JSON.parse(this.myArray);
    this.idunidad.nativeElement.value=this.arrayOfValues[0].IdUnidad;
    this.arraysplit=this.arrayOfValues[0].Fallas.split("-");
        this.falla1.nativeElement.value=this.arraysplit[0];
        this.falla2.nativeElement.value=this.arraysplit[1];
        this.falla3.nativeElement.value=this.arraysplit[2];
        this.falla4.nativeElement.value=this.arraysplit[3];
    this.ubicacion.nativeElement.value=this.arrayOfValues[0].Direccion;
    this.criticidad.nativeElement.value=this.arrayOfValues[0].NCriticidad;      
    
  }
  ngAfterViewInit() {
    this.fecha.nativeElement.value=(new Date().toISOString());
  }
  enviar(){
    const datos={
      Id: this.arrayOfValues[0].Id,
      Estatus: "9",
    };
    this.dataService.updateRescate(datos).subscribe(data=>{
      console.log(data);
      const queryParams: any = {};
      queryParams.myArray = JSON.stringify(this.arrayOfValues);
      const navigationExtras: NavigationExtras = {
        queryParams
      };
      this.router.navigate(['/form-rescate'],navigationExtras); 
    });
  }

}
