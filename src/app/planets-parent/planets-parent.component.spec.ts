import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PlanetsParentComponent } from './planets-parent.component';

describe('PlanetsParentComponent', () => {
  let component: PlanetsParentComponent;
  let fixture: ComponentFixture<PlanetsParentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PlanetsParentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PlanetsParentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
