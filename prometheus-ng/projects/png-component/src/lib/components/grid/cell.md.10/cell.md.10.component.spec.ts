import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.10Component } from './cell.md.10.component';

describe('Cell.Md.10Component', () => {
  let component: Cell.Md.10Component;
  let fixture: ComponentFixture<Cell.Md.10Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.10Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.10Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
