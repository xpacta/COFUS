import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
{
  path: '',
  redirectTo: 'home',
  pathMatch: 'full'
},

  { path: 'login', loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)  },
 {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  { path: 'form-gm/:id', loadChildren: () => import('./pages/form-gm/form-gm.module').then( m => m.FormGmPageModule)},
  { path: 'form-rescate', loadChildren: () => import('./pages/form-rescate/form-rescate.module').then( m => m.FormRescatePageModule)},
  { path: 'rescate-resol', loadChildren: () => import('./pages/rescate-resol/rescate-resol.module').then( m => m.RescateResolPageModule)},
  { path: 'rescate-info', loadChildren: () => import('./pages/rescate-info/rescate-info.module').then( m => m.RescateInfoPageModule)},
  { path: 'rescate-noresol', loadChildren: () => import('./pages/rescate-noresol/rescate-noresol.module').then( m => m.RescateNoresolPageModule)},
  { path: 'rescate-finalizado', loadChildren: () => import('./pages/rescate-finalizado/rescate-finalizado.module').then( m => m.RescateFinalizadoPageModule)},
  { path: 'form-cr', loadChildren: () => import('./pages/form-cr/form-cr.module').then( m => m.FormCrPageModule)},
  { path: 'form-jt', loadChildren: () => import('./pages/form-jt/form-jt.module').then( m => m.FormJTPageModule)},
  { path: 'form-ac', loadChildren: () => import('./pages/form-ac/form-ac.module').then( m => m.FormAcPageModule)},
  { path: 'form-mec', loadChildren: () => import('./pages/form-mec/form-mec.module').then( m => m.FormMecPageModule)},
  { path: 'home', loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule) },
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
