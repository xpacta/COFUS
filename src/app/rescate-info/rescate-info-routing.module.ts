import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { RescateInfoPage } from './rescate-info.page';

const routes: Routes = [
  {
    path: '',
    component: RescateInfoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class RescateInfoPageRoutingModule {}
