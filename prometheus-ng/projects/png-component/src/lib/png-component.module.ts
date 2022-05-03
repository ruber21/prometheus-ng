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
import { CellMd1Component } from './components/grid/cell.md.1/cell.md.1.component';
import { CellMd2Component } from './components/grid/cell.md.2/cell.md.2.component';
import { CellMd3Component } from './components/grid/cell.md.3/cell.md.3.component';
import { CellMd4Component } from './components/grid/cell.md.4/cell.md.4.component';
import { CellMd5Component } from './components/grid/cell.md.5/cell.md.5.component';
import { CellMd6Component } from './components/grid/cell.md.6/cell.md.6.component';
import { CellMd7Component } from './components/grid/cell.md.7/cell.md.7.component';
import { CellMd8Component } from './components/grid/cell.md.8/cell.md.8.component';
import { CellMd9Component } from './components/grid/cell.md.9/cell.md.9.component';
import { CellMd10Component } from './components/grid/cell.md.10/cell.md.10.component';
import { CellMd11Component } from './components/grid/cell.md.11/cell.md.11.component';
import { CellMd12Component } from './components/grid/cell.md.12/cell.md.12.component';



@NgModule({
  declarations: [
    PngComponentComponent,
    FooterComponent,
    MenuComponent,
    MainComponent,
    HeaderComponent,
    GridComponent,
    CardComponent,
    CellMd1Component, CellMd2Component, CellMd3Component, CellMd4Component, CellMd5Component, CellMd6Component, CellMd7Component, CellMd8Component, CellMd9Component, CellMd10Component, CellMd11Component, CellMd12Component,
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
    //CommonModule,
    GridComponent,
    CardComponent,
    CellMd1Component, CellMd2Component, CellMd3Component, CellMd4Component, CellMd5Component, CellMd6Component, CellMd7Component, CellMd8Component, CellMd9Component, CellMd10Component, CellMd11Component, CellMd12Component,
  ]
})
export class PngComponentModule { }
