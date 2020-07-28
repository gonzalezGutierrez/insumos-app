import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DepartamentoShowPageRoutingModule } from './departamento-show-routing.module';

import { DepartamentoShowPage } from './departamento-show.page';

import { MaterialModule } from '../../material.module';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        IonicModule,
        DepartamentoShowPageRoutingModule,
        MaterialModule
    ],
    declarations: [DepartamentoShowPage]
})
export class DepartamentoShowPageModule { }
