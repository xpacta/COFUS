import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ReporteInfoPageRoutingModule } from './reporte-info-routing.module';

import { ReporteInfoPage } from './reporte-info.page';
import { FormEditPageRoutingModule } from '../form-edit/form-edit-routing.module';
import { ComponentsModule } from 'src/app/Components/components.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ReporteInfoPageRoutingModule,
    FormEditPageRoutingModule,
    ComponentsModule
  ],
  declarations: [ReporteInfoPage]
})
export class ReporteInfoPageModule {}
