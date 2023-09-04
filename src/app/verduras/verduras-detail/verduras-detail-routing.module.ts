import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VerdurasDetailPage } from './verduras-detail.page';

const routes: Routes = [
  {
    path: '',
    component: VerdurasDetailPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VerdurasDetailPageRoutingModule {}
