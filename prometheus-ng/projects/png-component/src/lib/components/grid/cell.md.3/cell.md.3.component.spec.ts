import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.3Component } from './cell.md.3.component';

describe('Cell.Md.3Component', () => {
  let component: Cell.Md.3Component;
  let fixture: ComponentFixture<Cell.Md.3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.3Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
