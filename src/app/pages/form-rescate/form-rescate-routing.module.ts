import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FormRescatePage } from './form-rescate.page';

const routes: Routes = [
  {
    path: '',
    component: FormRescatePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FormRescatePageRoutingModule {}
