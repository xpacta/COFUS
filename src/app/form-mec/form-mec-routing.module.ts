import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormMecPage } from './form-mec.page';

const routes: Routes = [
  {
    path: '',
    component: FormMecPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormMecPageRoutingModule {}
