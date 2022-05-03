import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LayoutRoutingModule } from './layout-routing.module';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { MainComponent } from './main/main.component';
import { PngComponentComponent, PngComponentModule } from 'png-component';


@NgModule({
  declarations: [
    MenuComponent,
    FooterComponent,
    HeaderComponent,
    MainComponent,
  ],
  imports: [
    CommonModule,
    LayoutRoutingModule,
    PngComponentModule
  ]
})
export class LayoutModule { }
