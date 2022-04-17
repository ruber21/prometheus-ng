import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuTree } from 'src/app/models/menu';
import { CLASS, QUERY_ACCESORS, EVENT, DOM_ELEMENT } from '../../../shared/constants'
import jQuery from 'jquery';
import Doc from '../../../shared/doc';
import { Router } from '@angular/router';

@Component({
  selector: 'png-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input()
  public menuTree: MenuTree = {} as MenuTree;

  constructor(private router: Router) {

  }

  ngOnInit(): void {
    const route = this.router.url;
    this.menuTree.mainMenuOptions.forEach(mainMenuOption => {
      mainMenuOption.hasSubMenu = mainMenuOption.subMenu && mainMenuOption.subMenu.length > 0;
      mainMenuOption.active = route === mainMenuOption.route;
    });
  }

  ngAfterViewInit(): void {

  }

  public toggleExpand(e: Event){
    const parent = (e.target as Element).closest(`${DOM_ELEMENT.LI}.${CLASS.MAIN_OPTION_WRAPPER}`) as Element;
    const expanded = CLASS.EXPANDED;
    const submenu = parent.querySelector(
        `${QUERY_ACCESORS.CLASS}${CLASS.SUBMENU}`
        ) as HTMLElement;
    if(parent.classList.contains(expanded)){
        parent.classList.remove(expanded);
        submenu.style.height = '0';
    } else{
        parent.classList.add(expanded);
        const height = (<HTMLElement>submenu.children.item(0)).clientHeight;
        submenu.style.height = `${height}px`;
    }
  }

}
