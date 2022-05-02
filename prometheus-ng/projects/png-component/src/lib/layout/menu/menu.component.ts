import { AfterViewInit, Component, Input, OnInit, ViewChild } from '@angular/core';
import { MenuTree } from './menu';
import { CLASS, QUERY_ACCESORS, DOM_ELEMENT } from '../../shared/constants';
import jQuery from 'jquery';
import Doc from '../../shared/doc';
import { ActivatedRoute, NavigationCancel, NavigationEnd, Router } from '@angular/router';
import { concat } from 'rxjs';
import { filter } from 'rxjs/operators';

@Component({
  selector: 'png-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit, AfterViewInit {

  @Input()
  public menuTree: MenuTree = {} as MenuTree;



  constructor(private router: Router, private activatedRoute: ActivatedRoute) {

  }

  ngOnInit(): void {
    const route = this.router.url;
    const ar = this.activatedRoute.snapshot.root;
    this.menuTree.mainMenuOptions.forEach(mainMenuOption => {
      mainMenuOption.hasSubMenu = mainMenuOption.subMenu && mainMenuOption.subMenu.length > 0;
      mainMenuOption.active = route === mainMenuOption.route;
    });

    this.activatedRoute.url.subscribe(url => {
      console.log(url);
    });
    this.router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe((event) => {
      this.setActiveMenu(event as NavigationEnd);
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

  private setActiveMenu(event: NavigationEnd) {
    const url = event.url;
    this.menuTree.mainMenuOptions.forEach(m => {
      m.active = false;
      if(m.hasSubMenu) {
        m.subMenu?.forEach(s => s.active = false);
      }
    });
    for(const mainMenuOption of this.menuTree.mainMenuOptions){
      if(mainMenuOption.route?.includes(url)){
        mainMenuOption.active = true;
        break;
      } else if (mainMenuOption.hasSubMenu){
        const child = mainMenuOption.subMenu?.find(s => s.route?.includes(url));
        if(!!child) {
          child.active = true;
          mainMenuOption.active = true;
          break;
        }
      }
    }
  }

}
