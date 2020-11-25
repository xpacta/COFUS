import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescateResolPage } from './rescate-resol.page';

const routes: Routes = [
  {
    path: '',
    component: RescateResolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescateResolPageRoutingModule {}
