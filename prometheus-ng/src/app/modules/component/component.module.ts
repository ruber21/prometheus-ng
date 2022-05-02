import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ComponentRoutingModule } from './component-routing.module';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';


@NgModule({
  declarations: [
    CardComponent,
    GridComponent
  ],
  imports: [
    CommonModule,
    ComponentRoutingModule
  ]
})
export class ComponentModule { }
