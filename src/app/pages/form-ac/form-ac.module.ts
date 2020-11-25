import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormAcPageRoutingModule } from './form-ac-routing.module';

import { FormAcPage } from './form-ac.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormAcPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormAcPage]
})
export class FormAcPageModule {}
