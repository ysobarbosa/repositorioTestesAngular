import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DoubleScrollComponent } from './double-scroll.component';

describe('DoubleScrollComponent', () => {
  let component: DoubleScrollComponent;
  let fixture: ComponentFixture<DoubleScrollComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DoubleScrollComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DoubleScrollComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
