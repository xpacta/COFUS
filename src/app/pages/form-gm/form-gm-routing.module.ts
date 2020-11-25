import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormGmPage } from './form-gm.page';

const routes: Routes = [
  {
    path: '',
    component: FormGmPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormGmPageRoutingModule {}
