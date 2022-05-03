import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.4Component } from './cell.md.4.component';

describe('Cell.Md.4Component', () => {
  let component: Cell.Md.4Component;
  let fixture: ComponentFixture<Cell.Md.4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.4Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
