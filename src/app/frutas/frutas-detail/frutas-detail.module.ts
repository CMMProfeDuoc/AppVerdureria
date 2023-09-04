import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FrutasDetailPageRoutingModule } from './frutas-detail-routing.module';

import { FrutasDetailPage } from './frutas-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FrutasDetailPageRoutingModule
  ],
  declarations: [FrutasDetailPage]
})
export class FrutasDetailPageModule {}
