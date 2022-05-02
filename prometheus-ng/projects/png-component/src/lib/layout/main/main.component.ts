import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'png-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {

  @Input() logoUrl = '';

  constructor() { }

  ngOnInit(): void {
  }

}
