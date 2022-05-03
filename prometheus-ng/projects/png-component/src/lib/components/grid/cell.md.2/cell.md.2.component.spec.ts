import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.2Component } from './cell.md.2.component';

describe('Cell.Md.2Component', () => {
  let component: Cell.Md.2Component;
  let fixture: ComponentFixture<Cell.Md.2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
