import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DepartamentoShowPage } from './departamento-show.page';

const routes: Routes = [
  {
    path: '',
    component: DepartamentoShowPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DepartamentoShowPageRoutingModule {}
