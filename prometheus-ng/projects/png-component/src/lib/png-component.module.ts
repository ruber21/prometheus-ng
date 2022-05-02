import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FooterComponent } from './layout/footer/footer.component';
import { HeaderComponent } from './layout/header/header.component';
import { MainComponent } from './layout/main/main.component';
import { MenuComponent } from './layout/menu/menu.component';
import { PngComponentComponent } from './png-component.component';
import { GridComponent } from './components/grid/grid.component';
import { CardComponent } from './components/card/card.component';



@NgModule({
  declarations: [
    PngComponentComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    GridComponent,
    CardComponent,
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    PngComponentComponent,
    MainComponent,
    FooterComponent,
    MenuComponent,
    HeaderComponent,
    CommonModule
  ]
})
export class PngComponentModule { }
