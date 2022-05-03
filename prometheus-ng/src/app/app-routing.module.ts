import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutModule } from './modules/layout/layout.module';

const routes: Routes = [
  {
    path: 'layout',
    loadChildren: () => import('./modules/layout/layout.module').then(m => m.LayoutModule)
  },
  {
    path: 'components',
    loadChildren: () => import('./modules/component/component.module').then(m => m.ComponentModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
