import { Component, OnInit } from '@angular/core';
import menu from '../../../../assets/data/menu.json';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  constructor() { }

  //menuJson = JSON.stringify(menu)//;
  menuJson = `
  {
    "title": "Prometheus",
    "logoUrl": "./assets/logo.png",
    "mainMenuOptions": [
      {
        "label": "Home",
        "icon": "fa fa-home",
        "route": "/"
      },
      {
        "label": "Layout",
        "icon": "fas fa-newspaper",
        "subMenu": [
          {
            "label": "Menu",
            "icon": "fa fa-bars",
            "route": "./layout/menu"
          },
          {
            "label": "Header",
            "icon": "fas fa-heading",
            "route": "./layout/header"
          },
          {
            "label": "Main",
            "icon": "fas fa-align-center",
            "route": "./layout/main"
          },
          {
            "label": "Footer",
            "icon": "fas fa-shoe-prints",
            "route": "./layout/footer"
          }
        ]
      },
      {
        "label": "Components",
        "icon": "fas fa-microchip",
        "subMenu": [
          {
            "label": "Grid",
            "icon": "fas fa-border-all",
            "route": "./components/grid"
          },
          {
            "label": "Cards",
            "icon": "fas fa-money-check",
            "route": "./components/card"
          },
          {
            "label": "Input",
            "icon": "fas fa-keyboard",
            "route": "./components/input"
          },
          {
            "label": "Buttons",
            "icon": "fas fa-check-square",
            "route": "./components/button"
          },
          {
            "label": "Table",
            "icon": "fas fa-table",
            "route": "./components/table"
          }
        ]
      }
    ]
  }
  `;

  typescriptComponent = `  import { Component } from '@angular/core';
  import menu from '../assets/data/menu.json';
  import { MenuTree } from './models/menu';

  @Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss']
  })
  export class AppComponent {
    title = 'Prometheus-ng';
    logoUrl = './assets/logo.png';
    legend = 'Prometheus-ng for everyone';
    menuTree = menu as MenuTree;
  }`;

  treeComponent = `  export interface MenuTree{
    title: string,
    logoUrl: string,
    mainMenuOptions: MainMenuOption[],
  }

  export interface MenuOption {
    label: string,
    icon: string,
    route?: string,
    hasSubMenu?: boolean,
    active?: boolean
  }

  export interface MainMenuOption extends MenuOption{
    subMenu?: MenuOption[]
  }`;

  ngOnInit(): void {
  }

}
