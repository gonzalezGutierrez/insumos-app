import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SincronizePageRoutingModule } from './sincronize-routing.module';

import { SincronizePage } from './sincronize.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SincronizePageRoutingModule
  ],
  declarations: [SincronizePage]
})
export class SincronizePageModule {}
