import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductShowModalPage } from './product-show-modal.page';

const routes: Routes = [
  {
    path: '',
    component: ProductShowModalPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProductShowModalPageRoutingModule {}
