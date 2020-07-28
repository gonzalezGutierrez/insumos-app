import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SincronizePage } from './sincronize.page';

const routes: Routes = [
  {
    path: '',
    component: SincronizePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SincronizePageRoutingModule {}
