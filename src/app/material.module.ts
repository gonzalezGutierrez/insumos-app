import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatCardModule} from '@angular/material/card';
import {MatChipsModule} from '@angular/material/chips';
import {MatDividerModule} from '@angular/material/divider';
import {MatTabsModule} from '@angular/material/tabs';

import {
    MatTableModule,
    MatStepperModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatOptionModule,
    MatSelectModule,
    MatIconModule,
    MatPaginatorModule,
    MatSortModule,
  } from "@angular/material";

@NgModule({
    declarations: [],
    imports: [
        CommonModule
    ],
    exports: [
        MatTableModule,
        MatStepperModule,
        MatButtonModule,
        MatFormFieldModule,
        MatInputModule,
        MatIconModule,
        MatOptionModule,
        MatSelectModule,
        MatPaginatorModule,
        MatSortModule,
        MatCardModule,
        MatChipsModule,
        MatDividerModule,
        MatTabsModule
    ]
})
export class MaterialModule { }
