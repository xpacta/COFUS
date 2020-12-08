import { Component, Input, ViewChild } from '@angular/core';
import { PopoverController } from '@ionic/angular';
import { PopoverbodyComponent } from '../popoverbody/popoverbody.component';

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html'
})
export class HeaderComponent {

  constructor( public popoverController: PopoverController ){}
  @Input() titulo: string = '';

  async OpenPopOver( evento ) {
    const popover = await this.popoverController.create({
      component: PopoverbodyComponent,
      event: evento,
      mode: 'ios',
      backdropDismiss: true
    });
    return await popover.present();
  }

}
