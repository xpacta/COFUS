import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormMecPageRoutingModule } from './form-mec-routing.module';

import { FormMecPage } from './form-mec.page';
import { ComponentsModule } from '../../Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormMecPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormMecPage]
})
export class FormMecPageModule {}
