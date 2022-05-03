import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.5Component } from './cell.md.5.component';

describe('Cell.Md.5Component', () => {
  let component: Cell.Md.5Component;
  let fixture: ComponentFixture<Cell.Md.5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.5Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
