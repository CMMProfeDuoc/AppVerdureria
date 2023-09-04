import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'frutas',
    children: [
      {
        path : '',
        loadChildren: () => import('./frutas/frutas.module').then( m => m.FrutasPageModule)
      },
      {
        path: 'new-fruta',
        loadChildren: () => import('./frutas/add-fruta/add-fruta-routing.module').then (m => m.AddFrutaPageRoutingModule)
      },
      {
        path: ':frutaId',
        loadChildren: () => import('./frutas/frutas-detail/frutas-detail.module').then(m => m.FrutasDetailPageModule)
      }
    ]
  },
  {
    path: 'new-fruta',
    loadChildren: () => import('./frutas/add-fruta/add-fruta-routing.module').then (m => m.AddFrutaPageRoutingModule)
  },
  {
    path: 'verduras',
    children: [
      {
        path: '',
        loadChildren: () => import('./verduras/verduras.module').then( m => m.VerdurasPageModule)
      },
      {
        path:':verdurasId',
        loadChildren: () => import('./verduras/verduras-detail/verduras-detail.module').then(m => m.VerdurasDetailPageModule)
      }
    ]
  },
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
