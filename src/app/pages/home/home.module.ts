import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { ComponentsModule } from '../../Components/components.module';
import { ReporteInfoPage } from '../reporte-info/reporte-info.page';
import { ReporteInfoPageModule } from '../reporte-info/reporte-info.module';

@NgModule({
  entryComponents: [
    ReporteInfoPage
  ],
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ComponentsModule,
    ReporteInfoPageModule
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
