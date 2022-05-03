import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.9Component } from './cell.md.9.component';

describe('Cell.Md.9Component', () => {
  let component: Cell.Md.9Component;
  let fixture: ComponentFixture<Cell.Md.9Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.9Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.9Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
