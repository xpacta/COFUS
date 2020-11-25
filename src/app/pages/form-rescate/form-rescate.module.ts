import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormRescatePageRoutingModule } from './form-rescate-routing.module';

import { FormRescatePage } from './form-rescate.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormRescatePageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormRescatePage]
})
export class FormRescatePageModule {}
