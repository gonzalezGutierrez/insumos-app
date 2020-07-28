import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductShowModalPageRoutingModule } from './product-show-modal-routing.module';

import { ProductShowModalPage } from './product-show-modal.page';

import { MaterialModule } from '../../material.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductShowModalPageRoutingModule,
    MaterialModule
  ],
  declarations: [ProductShowModalPage]
})
export class ProductShowModalPageModule {}
