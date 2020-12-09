import { Component, Input, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverSessionComponent } from '../popoverSession/popoverSession.component';
import { PopoverNotificationsComponent } from '../popover-notifications/popover-notifications.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor( public popoverController: PopoverController ){}
  @Input() titulo: string = '';

  async OpenPopNotifications( evento ) {
    const popover = await this.popoverController.create({
      component: PopoverNotificationsComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true
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
