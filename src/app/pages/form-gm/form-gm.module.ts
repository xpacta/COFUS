import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormGmPageRoutingModule } from './form-gm-routing.module';

import { FormGmPage } from './form-gm.page';

import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormGmPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormGmPage]
})
export class FormGmPageModule {}
