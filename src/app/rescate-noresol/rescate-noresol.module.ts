import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescateNoresolPageRoutingModule } from './rescate-noresol-routing.module';

import { RescateNoresolPage } from './rescate-noresol.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescateNoresolPageRoutingModule
  ],
  declarations: [RescateNoresolPage]
})
export class RescateNoresolPageModule {}
