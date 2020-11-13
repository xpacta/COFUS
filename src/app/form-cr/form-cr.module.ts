import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormCrPageRoutingModule } from './form-cr-routing.module';

import { FormCrPage } from './form-cr.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormCrPageRoutingModule
  ],
  declarations: [FormCrPage]
})
export class FormCrPageModule {}
