import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RescateFinalizadoPageRoutingModule } from './rescate-finalizado-routing.module';

import { RescateFinalizadoPage } from './rescate-finalizado.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RescateFinalizadoPageRoutingModule,
    ComponentsModule
  ],
  declarations: [RescateFinalizadoPage]
})
export class RescateFinalizadoPageModule {}
