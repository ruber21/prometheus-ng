import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.8Component } from './cell.md.8.component';

describe('Cell.Md.8Component', () => {
  let component: Cell.Md.8Component;
  let fixture: ComponentFixture<Cell.Md.8Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.8Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.8Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
