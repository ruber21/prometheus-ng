import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.11Component } from './cell.md.11.component';

describe('Cell.Md.11Component', () => {
  let component: Cell.Md.11Component;
  let fixture: ComponentFixture<Cell.Md.11Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.11Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.11Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
