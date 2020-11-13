import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormGmPageRoutingModule } from './form-gm-routing.module';

import { FormGmPage } from './form-gm.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormGmPageRoutingModule
  ],
  declarations: [FormGmPage]
})
export class FormGmPageModule {}
