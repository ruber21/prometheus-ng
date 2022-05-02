import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PngComponentComponent } from './png-component.component';

describe('PngComponentComponent', () => {
  let component: PngComponentComponent;
  let fixture: ComponentFixture<PngComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PngComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PngComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
