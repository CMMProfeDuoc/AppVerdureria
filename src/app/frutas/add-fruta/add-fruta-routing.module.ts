import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddFrutaPage } from './add-fruta.page';

const routes: Routes = [
  {
    path: '',
    component: AddFrutaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AddFrutaPageRoutingModule {}
