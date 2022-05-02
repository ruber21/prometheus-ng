import { Component } from '@angular/core';
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
}
