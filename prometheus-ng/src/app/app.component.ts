import { Component } from '@angular/core';
import menu from '../assets/data/menu.json';
import { MenuTree } from './models/menu';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'prometheus-ng';
  menuTree = menu as MenuTree;
}
