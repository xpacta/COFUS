import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormJTPageRoutingModule } from './form-jt-routing.module';

import { FormJTPage } from './form-jt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormJTPageRoutingModule
  ],
  declarations: [FormJTPage]
})
export class FormJTPageModule {}
