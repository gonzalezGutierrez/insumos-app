import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { InsumosListComponent } from './insumos-list/insumos-list.component';

@NgModule({
  declarations: [InsumosListComponent],
  entryComponents:[],
  imports: [
    CommonModule,
    IonicModule.forRoot(),
  ],
  exports:[InsumosListComponent]
})
export class ComponentsModule { }
