import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdurasPage } from './verduras.page';

const routes: Routes = [
  {
    path: '',
    component: VerdurasPage
  },
  {
    path: 'verduras-detail',
    loadChildren: () => import('./verduras-detail/verduras-detail.module').then( m => m.VerdurasDetailPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerdurasPageRoutingModule {}
