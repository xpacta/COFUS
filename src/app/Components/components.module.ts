import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';

import { HeaderComponent } from './header/header.component';
import { PopoverSessionComponent } from './popoverSession/popoverSession.component';

@NgModule({
  declarations: [HeaderComponent, PopoverSessionComponent],
  exports: [HeaderComponent, PopoverSessionComponent],
  imports: [
    CommonModule,
    IonicModule
  ]
})
export class ComponentsModule { }
