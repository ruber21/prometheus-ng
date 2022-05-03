import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.1Component } from './cell.md.1.component';

describe('Cell.Md.1Component', () => {
  let component: Cell.Md.1Component;
  let fixture: ComponentFixture<Cell.Md.1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.1Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
