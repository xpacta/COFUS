import { ApplicationRef, Component, Input } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverSessionComponent } from '../popoverSession/popoverSession.component';
import { PopoverNotificationsComponent } from '../popover-notifications/popover-notifications.component';
import { NotipushService } from '../../services/notipush.service';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {
  unread = 0;

  constructor(
    public popoverController: PopoverController,
    public Notificaciones: NotipushService,
    private applicationRef: ApplicationRef
    ){
    this.unread = this.Notificaciones.contarNotificaciones();

    this.Notificaciones.Listener.subscribe( notificaction =>  {
      this.unread = this.contarNotificaciones();
      this.applicationRef.tick();
    } );
  }
  @Input() titulo: string;

  contarNotificaciones(){
    return this.Notificaciones.contarNotificaciones();
  }

  async OpenPopNotifications( evento ) {
    const popover = await this.popoverController.create({
      component: PopoverNotificationsComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true,
      cssClass: 'popover_class'
    });
    return await popover.present();
  }

  async OpenPopSession( evento ) {
    const popover = await this.popoverController.create({
      component: PopoverSessionComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true
    });
    return await popover.present();
  }

}
