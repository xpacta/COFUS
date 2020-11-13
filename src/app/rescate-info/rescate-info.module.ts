import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescateInfoPageRoutingModule } from './rescate-info-routing.module';

import { RescateInfoPage } from './rescate-info.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescateInfoPageRoutingModule
  ],
  declarations: [RescateInfoPage]
})
export class RescateInfoPageModule {}
