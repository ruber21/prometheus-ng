import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'png-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  @Input() title: string = '';
  @Input() logoUrl: string = '';
  @Input() legend: string = '';

  constructor() { }

  ngOnInit(): void {
  }

}
