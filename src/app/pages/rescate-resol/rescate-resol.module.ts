import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescateResolPageRoutingModule } from './rescate-resol-routing.module';

import { RescateResolPage } from './rescate-resol.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescateResolPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RescateResolPage]
})
export class RescateResolPageModule {}
