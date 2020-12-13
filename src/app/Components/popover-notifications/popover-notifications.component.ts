import { Component, OnInit } from '@angular/core';
import { NotipushService } from '../../services/notipush.service';
import { PopoverController } from '@ionic/angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-popover-notifications',
  templateUrl: './popover-notifications.component.html'
})

export class PopoverNotificationsComponent implements OnInit {

  constructor(
    public Notificaciones: NotipushService,
    public popoverController: PopoverController,
    public routerlink: Router
     ) {
  }

  ngOnInit( ) {
  }

  onClick(Rlink, Vista, NotificationID){
    if(Vista === false){
      for ( let i = 0; i <= this.Notificaciones.mensajes.length - 1; i++ ){
        if (this.Notificaciones.mensajes[i].notificationID === NotificationID){
            this.Notificaciones.mensajes[i].additionalData.vista = true;
            this.Notificaciones.guardarMensajes();
        }
      }
    }
    console.log('Redirect' + Rlink );
    this.popoverController.dismiss();
    this.routerlink.navigate([Rlink]);
  }

}
