import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FormEditPageRoutingModule } from './form-edit-routing.module';

import { FormEditPage } from './form-edit.page';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FormEditPageRoutingModule,
    FormEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [FormEditPage]
})
export class FormEditPageModule {}
