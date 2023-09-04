import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutasPage } from './frutas.page';

const routes: Routes = [
  {
    path: '',
    component: FrutasPage
  },
  {
    path: 'frutas-detail',
    loadChildren: () => import('./frutas-detail/frutas-detail.module').then( m => m.FrutasDetailPageModule)
  },
  {
    path: 'add-fruta',
    loadChildren: () => import('./add-fruta/add-fruta.module').then( m => m.AddFrutaPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutasPageRoutingModule {}
