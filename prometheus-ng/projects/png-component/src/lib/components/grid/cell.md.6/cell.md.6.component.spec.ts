import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.6Component } from './cell.md.6.component';

describe('Cell.Md.6Component', () => {
  let component: Cell.Md.6Component;
  let fixture: ComponentFixture<Cell.Md.6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.6Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
