import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescateFinalizadoPage } from './rescate-finalizado.page';

const routes: Routes = [
  {
    path: '',
    component: RescateFinalizadoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescateFinalizadoPageRoutingModule {}
