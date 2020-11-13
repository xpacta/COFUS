import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormJtPageRoutingModule } from './form-jt-routing.module';

import { FormJtPage } from './form-jt.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormJtPageRoutingModule
  ],
  declarations: [FormJtPage]
})
export class FormJtPageModule {}
