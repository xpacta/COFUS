import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: 'home', loadChildren: () => import('./home/home.module').then( m => m.HomePageModule) },
  { path: '', redirectTo: 'login',  pathMatch: 'full' },
  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)  },
  { path: 'form-gm', loadChildren: () => import('./form-gm/form-gm.module').then( m => m.FormGmPageModule)},
  { path: 'form-rescate', loadChildren: () => import('./form-rescate/form-rescate.module').then( m => m.FormRescatePageModule)},
  { path: 'rescate-resol', loadChildren: () => import('./rescate-resol/rescate-resol.module').then( m => m.RescateResolPageModule)},
  { path: 'rescate-info', loadChildren: () => import('./rescate-info/rescate-info.module').then( m => m.RescateInfoPageModule)},
  { path: 'rescate-noresol', loadChildren: () => import('./rescate-noresol/rescate-noresol.module').then( m => m.RescateNoresolPageModule)},
  { path: 'rescate-finalizado', loadChildren: () => import('./rescate-finalizado/rescate-finalizado.module').then( m => m.RescateFinalizadoPageModule)},
  { path: 'form-cr', loadChildren: () => import('./form-cr/form-cr.module').then( m => m.FormCrPageModule)},
  { path: 'form-jt', loadChildren: () => import('./form-jt/form-jt.module').then( m => m.FormJTPageModule)},
  {
    path: 'form-ac',
    loadChildren: () => import('./form-ac/form-ac.module').then( m => m.FormAcPageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
