import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AddFrutaPageRoutingModule } from './add-fruta-routing.module';

import { AddFrutaPage } from './add-fruta.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AddFrutaPageRoutingModule
  ],
  declarations: [AddFrutaPage]
})
export class AddFrutaPageModule {}
