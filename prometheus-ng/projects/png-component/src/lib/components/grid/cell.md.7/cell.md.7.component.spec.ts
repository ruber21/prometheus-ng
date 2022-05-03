import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.7Component } from './cell.md.7.component';

describe('Cell.Md.7Component', () => {
  let component: Cell.Md.7Component;
  let fixture: ComponentFixture<Cell.Md.7Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.7Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.7Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
