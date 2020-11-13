import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormCrPage } from './form-cr.page';

const routes: Routes = [
  {
    path: '',
    component: FormCrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormCrPageRoutingModule {}
