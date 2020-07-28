import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { InsumoPageRoutingModule } from './insumo-routing.module';

import { InsumoPage } from './insumo.page';

import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    InsumoPageRoutingModule,
    MaterialModule
  ],
  declarations: [InsumoPage]
})
export class InsumoPageModule {}
