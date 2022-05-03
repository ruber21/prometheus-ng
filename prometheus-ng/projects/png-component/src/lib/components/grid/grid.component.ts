import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'png-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {

  columns = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];

  constructor() { }

  ngOnInit(): void {
  }

}
