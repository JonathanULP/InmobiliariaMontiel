import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';


const routes: Routes = [

  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'inmuebles',
    loadChildren: () => import('./pages/inmuebles/inmuebles.module').then( m => m.InmueblesPageModule)
   },
  {
    path: 'mapa',
     loadChildren: () => import('./pages/mapa/mapa.module').then( m => m.MapaPageModule)
   },
  {
    path: 'menu',
    loadChildren: () => import('./pages/menu/menu.module').then( m => m.MenuPageModule)
  },
  {
    path: 'perfil',
   loadChildren: () => import('./pages/perfil/perfil.module').then( m => m.PerfilPageModule)
   },
  {
    path: 'inmuebles-create',
    loadChildren: () => import('./pages/inmuebles-create/inmuebles-create.module').then( m => m.InmueblesCreatePageModule)
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule],
})
export class AppRoutingModule { }
