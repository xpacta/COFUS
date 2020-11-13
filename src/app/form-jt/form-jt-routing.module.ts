import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

<<<<<<< HEAD
import { FormJTPage } from './form-jt.page';
=======
import { FormJtPage } from './form-jt.page';
>>>>>>> 1b3a818fa200a1ac753a46adb59fd00eb9e4586d

const routes: Routes = [
  {
    path: '',
<<<<<<< HEAD
    component: FormJTPage
=======
    component: FormJtPage
>>>>>>> 1b3a818fa200a1ac753a46adb59fd00eb9e4586d
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
<<<<<<< HEAD
export class FormJTPageRoutingModule {}
=======
export class FormJtPageRoutingModule {}
>>>>>>> 1b3a818fa200a1ac753a46adb59fd00eb9e4586d
