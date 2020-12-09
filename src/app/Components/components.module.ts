import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverbodyComponent } from './popoverbody/popoverbody.component';

@NgModule({
  declarations: [HeaderComponent, PopoverbodyComponent],
  exports: [HeaderComponent, PopoverbodyComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
