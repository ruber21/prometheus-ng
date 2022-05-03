import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CardComponent } from './card/card.component';
import { GridComponent } from './grid/grid.component';

const routes: Routes = [
  {
    path: 'card',
    component: CardComponent,
  },
  {
    path: 'grid',
    component: GridComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ComponentRoutingModule { }
