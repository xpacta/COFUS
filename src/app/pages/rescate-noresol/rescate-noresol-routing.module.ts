import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescateNoresolPage } from './rescate-noresol.page';

const routes: Routes = [
  {
    path: '',
    component: RescateNoresolPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescateNoresolPageRoutingModule {}
