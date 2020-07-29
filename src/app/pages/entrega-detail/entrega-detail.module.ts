import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { EntregaDetailPageRoutingModule } from './entrega-detail-routing.module';

import { EntregaDetailPage } from './entrega-detail.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    EntregaDetailPageRoutingModule
  ],
  declarations: [EntregaDetailPage]
})
export class EntregaDetailPageModule {}
