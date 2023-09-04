import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VerdurasDetailPageRoutingModule } from './verduras-detail-routing.module';

import { VerdurasDetailPage } from './verduras-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VerdurasDetailPageRoutingModule
  ],
  declarations: [VerdurasDetailPage]
})
export class VerdurasDetailPageModule {}
