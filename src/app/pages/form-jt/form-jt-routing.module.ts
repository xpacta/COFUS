import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormJTPage } from './form-jt.page';

const routes: Routes = [
  {
    path: '',
    component: FormJTPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormJTPageRoutingModule {}
