import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FrutasDetailPage } from './frutas-detail.page';

const routes: Routes = [
  {
    path: '',
    component: FrutasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrutasDetailPageRoutingModule {}
