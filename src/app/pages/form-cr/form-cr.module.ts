import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCrPageRoutingModule } from './form-cr-routing.module';

import { FormCrPage } from './form-cr.page';

import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCrPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormCrPage]
})
export class FormCrPageModule {}
