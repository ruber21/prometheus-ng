import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from 'png-component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MenuComponent } from './menu/menu.component';

const routes: Routes = [
  {
    path: 'menu',
    component: MenuComponent
  },
  {
    path: 'footer',
    component: FooterComponent
  },
  {
    path: 'header',
    component: HeaderComponent
  },
  {
    path: 'main',
    component: MainComponent
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
