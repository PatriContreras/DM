import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },
  {
    path: 'new',
    loadChildren: () => import('./pages/new-dish/new-dish.module').then( m => m.NewDishPageModule)
  },
  {
    path: 'landing',
    loadChildren: () => import('./pages/landing/landing.module').then( m => m.LandingPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
