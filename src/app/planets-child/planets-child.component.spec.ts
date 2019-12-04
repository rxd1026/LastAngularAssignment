import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsChildComponent } from './planets-child.component';

describe('PlanetsChildComponent', () => {
  let component: PlanetsChildComponent;
  let fixture: ComponentFixture<PlanetsChildComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsChildComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsChildComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
