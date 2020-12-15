import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { PopoverController } from '@ionic/angular';

@Component({
  selector: 'app-popoverSession',
  templateUrl: './popoverSession.component.html'
})
export class PopoverSessionComponent implements OnInit {
  perfil : any;
  usuario: any;
  nombreperfil: any;
  constructor(private auth: AuthService, private router: Router, public popoverController: PopoverController) { }

  ngOnInit() {
    this.usuario = localStorage.getItem('user');
    this.perfil = localStorage.getItem('perfil');
    console.log(this.usuario);
    console.log(this.perfil);
    if(this.perfil === "0"){
      this.nombreperfil="Jefe de transportación";
    }
    if(this.perfil === "1"){
      this.nombreperfil="Gerente de mantenimiento";
    }
    if(this.perfil === "2"){
      this.nombreperfil="Coordinador de recepción";
    }
    if(this.perfil === "3"){
      this.nombreperfil="Validación";
    }
    if(this.perfil === "Rescate"){
      this.nombreperfil="Jefe de transportación";
    }
  }

  sesionDestroy(){
    this.auth.logout();
    this.router.navigateByUrl('/login');
    this.popoverController.dismiss();
  }
}
