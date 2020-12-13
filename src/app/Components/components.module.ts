import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverSessionComponent } from './popoverSession/popoverSession.component';
import { PopoverNotificationsComponent } from './popover-notifications/popover-notifications.component';

@NgModule({
  declarations: [HeaderComponent, PopoverSessionComponent, PopoverNotificationsComponent],
  exports: [HeaderComponent, PopoverSessionComponent, PopoverNotificationsComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
