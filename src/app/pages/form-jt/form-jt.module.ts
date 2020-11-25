import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormJTPageRoutingModule } from './form-jt-routing.module';

import { FormJTPage } from './form-jt.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormJTPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormJTPage]
})
export class FormJTPageModule {}
