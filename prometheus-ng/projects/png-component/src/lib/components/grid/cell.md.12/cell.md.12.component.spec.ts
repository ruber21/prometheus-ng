import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Cell.Md.12Component } from './cell.md.12.component';

describe('Cell.Md.12Component', () => {
  let component: Cell.Md.12Component;
  let fixture: ComponentFixture<Cell.Md.12Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Cell.Md.12Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Cell.Md.12Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
